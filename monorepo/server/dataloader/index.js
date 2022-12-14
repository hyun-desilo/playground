// import multiply from 'common/utils/multiply';
const express = require('express');
const multiply = require('common/utils/multiply');
const dayjs = require('dayjs');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('be1 입니다.');
});

app.get('/multiply', (req, res) => {
  res.send(`4 x 5 = ${multiply(4, 5)}`);
});

app.get('/dayjs', (req, res) => {
  res.send(`${dayjs().toISOString()}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
