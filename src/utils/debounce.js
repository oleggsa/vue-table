function debounce(fn, ms) {
    let timeout;
    return function(...args) {
      const context = this
      clearTimeout(timeout)
      timeout = setTimeout(() => fn.apply(context, args), ms)
    }
  }

export default debounce;