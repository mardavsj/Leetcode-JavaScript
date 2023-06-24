Function.prototype.callPolyfill = function(context, ...args) {
    const uniqueId=Symbol();
    context[uniqueId]=this;
    const ans=context[uniqueId](...args);
    delete context[uniqueId];
    return ans;

};