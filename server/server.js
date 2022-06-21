const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use((err, req, res, next) => {
    const defaultError = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: 'Generic message error',
    };
    const errorObj = Object.assign(defaultError, err);
    return res.status(errorObj.status).json(errorObj.message);
  });  

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

module.exports = app;