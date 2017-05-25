import test from 'ava'
import fs   from 'fs'
import path from 'path'
import * as arrayProps from 'Array'

test.cb('All module has been exported', t => {
  fs.readdir('./src/Array/', (err, paths) => {

    if (err) { throw err }

    const props = paths
      .map(filename => path.parse(filename).name)
      .filter(name => name !== 'index')

    const exported = Object.keys(arrayProps)
      .filter(key => key !== 'default')

    const defaults = Object.keys(arrayProps.default)

    t.deepEqual(props, exported)
    t.deepEqual(props, defaults)
    t.end()
  })
})

Object.keys(arrayProps.default)
  .forEach(key => test(`${key} is a symbol`, t => t.is(typeof arrayProps.default[key], 'symbol')))
