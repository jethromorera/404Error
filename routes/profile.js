const express = require('express');
const pool = require('../db/pool');
const { requireLogin, requireRole } = require('../middleware/auth');
const router = express.Router();

// ---------- User Profile ----------
router.get('/profile', requireLogin, async (req, res) => {
  const result = await pool.query(
    'SELECT id, name, email, bio, avatar_url, role, created_at FROM users WHERE id = $1',
    [req.session.userId]
  );
  res.render('profile', { user: result.rows[0], saved: false });
});

router.post('/profile', requireLogin, async (req, res) => {
  const { name, bio, avatar_url } = req.body;
  await pool.query(
    'UPDATE users SET name = $1, bio = $2, avatar_url = $3 WHERE id = $4',
    [name, bio, avatar_url, req.session.userId]
  );
  const result = await pool.query(
    'SELECT id, name, email, bio, avatar_url, role, created_at FROM users WHERE id = $1',
    [req.session.userId]
  );
  res.render('profile', { user: result.rows[0], saved: true });
});

// ---------- Authorization & Roles ----------
// Admin-only page — proves the role-based access control works
router.get('/admin', requireRole('admin'), async (req, res) => {
  const result = await pool.query(
    'SELECT id, name, email, role, created_at FROM users ORDER BY created_at DESC'
  );
  res.render('admin', { users: result.rows });
});

module.exports = router;
