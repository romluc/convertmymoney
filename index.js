const express = require('express')
const app = express()
const port = 3000 || process.env.PORT,

const path = require('path')

app.set('view engine', 'ejs')

app.listen(port , err => {
  if(err) {
    console.log('Unable to start server')
  } else {
    console.log(`ConvertMyMoney running on port ${port}`)
  }
})