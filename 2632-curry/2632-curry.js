const curry = function(fn) {
  return function curried(...args) {
    if(args.length >= fn.length) return fn(...args)
    return (...params) => curried(...args, ...params)
  };
};