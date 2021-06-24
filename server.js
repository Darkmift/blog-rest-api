// use dotenv in dev enviroment
if (process.env.NODE_ENV != 'production') {
  const dotenv = require('dotenv')
  const result = dotenv.config()
  if (result.error) {
    throw result.error
  }
}

const express = require('express');
const app = express();

const mainRouter = require('./routes');

app.use(express.json());

app.use('/health', (req, res) => {
  res.send({ status: 'Ok' })
});

app.use('/api', mainRouter);

app.use((req, res) => {
  res.status(404).end()
})

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log('Server listening on port: ' + PORT);
  console.log('NODE_ENV' + process.env.NODE_ENV);
});