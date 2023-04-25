var filter = function(array, fn) {
    const res = []
    array.forEach((punch,i)=> {
        if(fn.call(this, punch, i)){
            res.push(punch)
        }
    });
    return res;
};