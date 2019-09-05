import workerpool from 'workerpool'

// an async function returning a promise
export const asyncAdd = (a, b) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(a + b)
    }, 1000)
  })
}

// an async function returning a promise
export const asyncMultiply = (a, b) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(a * b)
    }, 1000)
  })
}

export const timeout = ms => {
  return new Promise(function(resolve, reject) {
    setTimeout(resolve, ms)
  })
}

// create a worker and register public functions
workerpool.worker({
  asyncAdd,
  asyncMultiply,
  timeout,
})
