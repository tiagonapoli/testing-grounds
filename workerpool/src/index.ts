import workerpool from 'workerpool'
import psTree from 'ps-tree'
import path from 'path'

const webpack = require('webpack')

const pool = workerpool.pool(path.join(__dirname, './tasks.js'), {
  minWorkers: 4,
  // @ts-ignore
  workerType: 'process',
})

setInterval(() => {
  console.log(pool.stats())

  psTree(process.pid, (err, children) => {
    console.log(children)
    console.log('\n\n')
  })
}, 2000)
