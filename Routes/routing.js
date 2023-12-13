const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
  console.log('GET request received at /api');
  res.status(200).json({ message: 'GET request received!' });
});

router.get('/', (req, res) => {
  console.log('GET request received at /api');
  res.status(200).json({ message: 'GET request received!' });
});

module.exports = router;