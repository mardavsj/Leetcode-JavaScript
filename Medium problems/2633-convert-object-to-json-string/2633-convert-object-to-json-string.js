var jsonStringify = function(object) {
    if (typeof object === 'number' || typeof object === 'boolean' || 
        object === undefined) return object;
    if(object === null) return "null"
    if (typeof object === 'string') return `"${object}"`;
    if (Array.isArray(object)) return `[${object.map(jsonStringify).join(',')}]`;
    return '{' + Object.keys(object).map(key => `"${key}":${jsonStringify(object[key])}`) + '}';
};