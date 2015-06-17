var Hapi = require('hapi')
var engine = require('hapi-react')()
var path = require('path')

var server = new Hapi.Server(0)
server.connection({port: 3000})


server.views({
  defaultExtension: 'jsx',
  engines: {
    jsx: engine,
    js: engine
  },
  path: path.join(__dirname, 'views')
})

server.route({
  method: 'GET',
  path: '/',
  handler: function (req, res) {
    res.view('index', {
      name: 'Gareth'
    })
  }
})

server.start(function () {
  console.log('Server started at: ' + server.info.uri)
})
