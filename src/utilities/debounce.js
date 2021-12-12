/**
 * debounce - given multiple identical functions that execute in quick succession,
 * returns only the last function call at the end of any timeout
 * @param {function} func
 * @param {number} timeout
 * @returns function
 */
function debounce (func, timeout = 500) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => { func.apply(this, args) }, timeout)
  }
}

export default debounce
