const http = require('http')
const port = 3000

const handleRequest = (req, res) => {
  res.end('it works')
}

const server = http.createServer(handleRequest)

server.listen(port, () => {
  console.log('server listening on port', port)
})
