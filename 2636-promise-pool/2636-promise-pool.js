var promisePool = async function(functions, n) {
const next = async () => {
        if (!functions.length) {
            return Promise.resolve();
        }

        await functions.shift()();
        await next();
    }


    await Promise.all(new Array(n).fill(0).map(next));
};
