const express = require('express');
// import express from 'express';
// import {
//   setData,
//   getData,
//   getCounts,
//   incCounts,
// } from '../controllers/dataController';

const router = express.Router();

const {
  setData,
  getData,
  getCounts,
  incCounts,
} = require('../controllers/dataController');

router.post('/setdata', setData);
router.get('/getdata', getData);

router.get('/getcount', getCounts);
router.post('/inccount', incCounts);

module.exports = router;
// export { router };
