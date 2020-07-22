import express from 'express';
import middleware1 from './middleware1';
import middleware2 from './middleware2';

const app = express();
const port = 81;


app.use(middleware1);
app.use(middleware2);

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});


app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
