var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(integers => {
            return integers.reduce((acc, curr) => acc + curr, 0);
        });;
};