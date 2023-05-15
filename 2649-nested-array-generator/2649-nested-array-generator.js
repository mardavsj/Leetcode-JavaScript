var inorderTraversal = function*(arr) {
    for(let i=0;i<arr.length;i+=1) {
        if(Array.isArray(arr[i])) {
            yield* inorderTraversal(arr[i]);
        }
        else {
            yield arr[i];
        }
    }
};