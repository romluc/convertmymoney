const axios = require('axios');

const getQuotation = async () => {
  return axios.get(`https://api.exchangeratesapi.io/latest?base=USD`).then(
    res => {
      const data = parseFloat(res.data.rates.BRL).toFixed(3);
      const date = res.data.date;
      return { data, date };
    },
    error => {
      console.log(`Error message from api:`, error.response.data.error);
    }
  );
};

module.exports = {
  getQuotation
};
