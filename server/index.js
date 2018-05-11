const express = require('express')
const bodyParser = require('body-parser')
const hc = require('./controller')
const massive = require('massive')
require('dotenv').config()
const port = 5454

const app = express()
app.use(bodyParser.json())

app.get('/api/houses',hc.getAllHouses)
app.post('/api/houses', hc.createHouse)
app.delete('/api/houses/:id', hc.delete)




massive(process.env.CONNECTION_STRING)
  .then(db => {
    db.seedFile()
      .then(res => console.log('seed successful'))
      .catch(err => console.log('seed not successful', err))
  app.set('db', db)
  app.listen(port, console.log(`Docked at Port ${port}`))
}).catch(err => console.log(err))
