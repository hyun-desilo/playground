const express = require('express');
const multiply = require('common/utils/multiply');
const { faker } = require('@faker-js/faker');
const dayjs = require('dayjs');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('be2 입니다.');
});

app.get('/multiply', (req, res) => {
  res.send(`3 x 4 = ${multiply(3, 4)}`);
});

app.get('/faker', (req, res) => {
  res.send(faker.name.fullName());
});

// shourd be error
app.get('/dayjs', (req, res) => {
  res.send(`${dayjs().toISOString()}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
