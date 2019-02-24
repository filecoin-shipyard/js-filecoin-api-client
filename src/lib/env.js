if (typeof window !== 'undefined' || typeof self !== 'undefined') {
  // Browser/worker
  exports.isBrowser = true
} else if (typeof global !== 'undefined') {
  // Node.js
  exports.isNode = true
}
