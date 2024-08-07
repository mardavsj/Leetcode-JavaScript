function memoize(fn) {
    const cache = Object.create(null);
    const syms = [];
    let seq = 0;

    return function() {
        const len = arguments.length;
        const arg = Array.prototype.slice.call(arguments);
        let key = '';
        for (let i=0; i<len; i++) {
            let A = arg[i];
            if (A && typeof A==='object') {
                if (!A.cheat) Object.defineProperty(A, 'cheat', {value:':obj'+(++seq), enumerable:0});
                key += A.cheat;
            } else
            if (typeof A==='symbol') {
                let s = syms.indexOf(A);
                if (s < 0) s = syms.push(A);
                key += ':sym'+s;
            } else
                key += ':'+String(A);
        }
        if (key in cache) return cache[key];
        return cache[key] = fn.apply(this, arguments);
    }
}