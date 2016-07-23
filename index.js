const http = require('http')
const port = 3000

const auth0 = require('./auth0')

const handleRequest = (req, res) => {
  res.writeHead(200)
  res.write('API Key: ' + process.env.API_KEY + '\n')
  res.write('API_SECRET: ' + process.env.API_SECRET + '\n\n')
  res.write('Auth0 Token to read users:\n' + auth0.token + '\n\n')
  res.write('Request to validate token:\n' +
    'curl -H "Authorization: Bearer ' + auth0.token + '" ' +
    'https://cleansheet.auth0.com/api/v2/users') + '\n\n'
  res.end()
}

const server = http.createServer()

server.on('request', handleRequest)

server.listen(port, () => {
  console.log('server listening on port', port)
})
