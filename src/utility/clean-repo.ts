import * as fs from 'fs'
import * as path from 'path'

const dir = '../../'
fs.readdir(path.join(__dirname, dir), (error, files) => {
  files.filter(file => ![
    '.gitignore',
    'package.json',
    'package-lock.json',
    'tsconfig.json',
    'webpack.config.js'
  ].includes(file)).map(file => path.join(__dirname, dir, file)).forEach(file => {
    fs.stat(file, (error, stats) => {
      if(!stats.isDirectory()) {
        fs.unlink(file, (error) => {
          if(error) console.error(error)
          else console.log('Removed ' + file)
        })
      }
    })
  })
})