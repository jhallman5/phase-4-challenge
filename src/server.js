const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./controllers/routes')

const port = process.env.PORT || 3000

const server = express()

require('ejs')
server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use('/bulma', express.static('node_modules/bulma/css'))
server.use(express.static(path.join(__dirname, 'public')))
server.use(bodyParser.urlencoded({extended: false}))

server.use(routes)


server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
