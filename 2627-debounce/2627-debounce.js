var debounce = function(fn, t) {
  let timer = null;
  let latestInputs = null;

  return function debounced(...inputs) {
    latestInputs = inputs;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...latestInputs);
      timer = null;
      latestInputs = null;
    }, t);
  };
    
};