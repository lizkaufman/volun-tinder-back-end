const express = require('express');
const router = express.Router();

const { getOrgs } = require('../models/orgs');

router.get('/orgs', async (req, res) => {
  const orgData = await getOrgs;
  res.json(orgData);
});

module.exports = router;
