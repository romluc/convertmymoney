const axios = require('axios');

const getQuotation = async () => {
  return axios.get(`https://api.exchangeratesapi.io/latest?base=USD`).then(
    res => {
      const data = parseFloat(res.data.rates.BRL).toFixed(3);
      return data;
    },
    error => {
      console.log(error);
    }
  );
};

module.exports = {
  getQuotation
};
