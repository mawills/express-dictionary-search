const express = require('express');
const axios = require('axios');
const router = express.Router();

const APP_ID = '7d64b4c4';
const API_KEY = 'a038417f5a31b680504fdad206a4e3f6';
const ROOT_URL = 'https://od-api.oxforddictionaries.com:443/api/v1';

const url = `${ROOT_URL}/entries/en/fox`;
const config = {
  headers: {
    'Accept': "application/json",
    'app_id': APP_ID,
    'app_key': API_KEY
  }
};

router.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

router.route('/')
  .get((req, res) => {
    axios.get(url, config)
      .then((response) => {
        console.log(response.data.results[0]);
        res.json(response.data.results[0]);
      })
      .catch((response) => {
        console.log(response);
      })
  });

module.exports = router;
