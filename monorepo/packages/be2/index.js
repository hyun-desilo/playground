import multiply from 'common/utils/multiply';
import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('be2 입니다.');
});

app.get('/multiply', (req, res) => {
  res.send(`3 x 4 = ${multiply(3, 4)}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
