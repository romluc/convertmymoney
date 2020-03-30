const express = require('express');
const app = express();
const path = require('path');

const convert = require('./lib/convert');

const port = 3000 || process.env.PORT;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/quotation', (req, res) => {
  const { quotation, quantity } = req.query;
  const convertion = convert.convert(quotation, quantity);
  res.render('quotation', {
    quotation,
    quantity,
    convertion
  });
});

app.listen(port, err => {
  if (err) {
    console.log('Unable to start server');
  } else {
    console.log(`ConvertMyMoney running on port ${port}`);
  }
});
