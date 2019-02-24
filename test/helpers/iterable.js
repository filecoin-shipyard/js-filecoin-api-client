exports.toAsyncIterable = array => {
  array = Array.from(array)
  return {
    [Symbol.asyncIterator] () {
      return this
    },
    async next () {
      await new Promise(resolve => setTimeout(resolve))
      return array.length
        ? { done: false, value: array.shift() }
        : { done: true }
    }
  }
}
