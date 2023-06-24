var chunk = function(arr, size) {
  if (size <= 0 || arr.length === 0) {
    return [];
  }

  var chunkedArr = [];
  var i = 0;

  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + size));
    i += size;
  }

  return chunkedArr;
};
