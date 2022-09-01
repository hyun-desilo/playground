// import multiply from 'common/utils/multiply';
import express from 'express';
import multiply from 'common/utils/multiply';
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('be1 입니다.');
});

app.get('/multiply', (req, res) => {
  res.send(`4 x 5 = ${multiply(4, 5)}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
