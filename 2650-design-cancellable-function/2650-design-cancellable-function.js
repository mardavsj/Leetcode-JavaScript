var cancellable = function(generator) {
    let resolve;
    let reject;
    let isCancelled = false;
    
    const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
    });
    
    const cancel = () => {
        isCancelled = true;
        try {
        	const obj = generator.throw("Cancelled");
            resolve(obj.value)
        } catch (e) {
            reject(e);
        }
    }
    
    function helper(val, err) {
        if (isCancelled) return;
        try {
            const obj = err ? generator.throw(err) : generator.next(val);
            if (obj.done) {
                resolve(obj.value)
            } else {
                obj.value.then(helper).catch(e => helper(undefined, e))
            }
        } catch (e) {
            reject(e)
        }
    }
    helper();

    return [cancel, promise];
};