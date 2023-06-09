var cancellable = function(fn, args, t) {
  fn(...args);

  let id = setTimeout(function run() {
    fn(...args);
    id = setTimeout(run, t);
  }, t);

  const cancelFn = () => clearTimeout(id);

  return cancelFn; 
};