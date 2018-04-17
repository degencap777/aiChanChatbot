import * as http from 'http'
import * as url from 'url'
import * as path from 'path'
import * as fs from 'fs'

http.createServer((request, response) => {
  const uri = url.parse(request.url).pathname
  let filename = path.join(process.cwd(), uri)

  fs.exists(filename, (exists) => {
    if(!exists || filename.includes('server')) {
      response.writeHead(404, {'Content-Type':'text/plain'})
      response.write('404 Not Found\n')
      response.end()
    } else {
      if(fs.statSync(filename).isDirectory()) filename += '/index.html'

      fs.readFile(filename, 'binary', (error, file) => {
        if(error) {
          response.writeHead(500, {'Content-Type':'text/plain'})
          response.write(error + '\n');
          response.end()
        } else {
          response.writeHead(200)
          response.write(file, 'binary')
          response.end()
        }
      })
    }
  })
}).listen(parseInt(process.env.PORT) || 8888)