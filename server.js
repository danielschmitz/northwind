const jsonServer = require('json-server')
const fs = require('fs');
const northwind = require('./northwind.js');
const server = jsonServer.create()
fs.writeFileSync('/tmp/northwind.json', JSON.stringify(northwind()));

const router = jsonServer.router('/tmp/northwind.json')

const options = {
  static: __dirname + '/public'
}

const middlewares = jsonServer.defaults(options)
const port = process.env.PORT || 3000

server.use(middlewares)
server.use('/api', router)

server.listen(port, () => {
  console.log('JSON Server is running on ' + port)
})