const convert = (quotation, quantity) => {
  return quotation * quantity;
};

const toMoney = value => {
  return value.toFixed(2);
};

module.exports = {
  convert,
  toMoney
};
