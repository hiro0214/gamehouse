import express from 'express';

const app = express(),
PORT = process.env.PORT || 8000;

app
  .use(express.static('dist'))
  .get('/', (req, res) => res.render(__dirname + './index.html'));

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} \n access to http://localhost:${PORT}/`);
})