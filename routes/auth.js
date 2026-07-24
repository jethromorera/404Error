const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db/pool');
const router = express.Router();

// ---------- Registration & Onboarding ----------
router.get('/register', (req, res) => {
  res.render('register', { error: null });
});

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.render('register', { error: 'All fields are required.' });
  }
  if (password.length < 6) {
    return res.render('register', { error: 'Password must be at least 6 characters.' });
  }

  try {
    const existing = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.render('register', { error: 'An account with that email already exists.' });
    }

    const hash = await bcrypt.hash(password, 10);
    const result = await pool.query(
      `INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, role`,
      [name, email, hash]
    );

    // Auto-login after registration (onboarding straight into the app)
    req.session.userId = result.rows[0].id;
    req.session.role = result.rows[0].role;
    res.redirect('/profile');
  } catch (err) {
    console.error(err);
    res.render('register', { error: 'Something went wrong. Please try again.' });
  }
});

// ---------- Authentication & Sessions ----------
router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.render('login', { error: 'Invalid email or password.' });
    }

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match) {
      return res.render('login', { error: 'Invalid email or password.' });
    }

    req.session.userId = user.id;
    req.session.role = user.role;
    res.redirect('/profile');
  } catch (err) {
    console.error(err);
    res.render('login', { error: 'Something went wrong. Please try again.' });
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

module.exports = router;
