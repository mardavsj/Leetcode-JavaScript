var compactObject = function(obj) {
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const result = {};
  for (const key in obj) {
    const value = compactObject(obj[key]);
    if (Boolean(value)) {
      result[key] = value;
    }
  }
  return result;   
};