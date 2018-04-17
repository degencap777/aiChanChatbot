import * as nodeStatic from 'node-static'
import * as http from 'http'

declare const PORT:string
const file = new nodeStatic.Server()

http.createServer((request, response) => {
  request.addListener('end', () => {
    file.serve(request, response)
  }).resume()
}).listen(PORT || 80)