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
  if (quotation && quantity) {
    const conversion = convert.convert(quotation, quantity);
    res.render('quotation', {
      error: false,
      quotation: convert.toMoney(quotation),
      quantity: convert.toMoney(quantity),
      conversion: convert.toMoney(conversion)
    });
  } else {
    res.render('quotation', {
      error: 'Oops! Insert values!'
    });
  }
});

app.listen(port, err => {
  if (err) {
    console.log('Unable to start server');
  } else {
    console.log(`ConvertMyMoney running on port ${port}`);
  }
});
