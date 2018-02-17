const express = require('express');
const axios = require('axios');
const router = express.Router();

const APP_ID = '7d64b4c4';
const API_KEY = 'a038417f5a31b680504fdad206a4e3f6';
const ROOT_URL = 'https://od-api.oxforddictionaries.com:443/api/v1';

router.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

router.route('/')
  .post((req, res) => {
    const url = `${ROOT_URL}/entries/en/${req.body.word}`;
    const config = {
      headers: {
        'Accept': "application/json",
        'app_id': APP_ID,
        'app_key': API_KEY
      }
    };
    axios.get(url, config)
      .then((response) => {
        res.json({
          status: response.status,
          data: response.data
        });
      })
      .catch((error) => {
        res.json({
          status: 404
        });
      })
  });

module.exports = router;
