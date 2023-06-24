var createCounter = function(init) {
    const original = init
    const increment = () => ++init
    const decrement = () => --init
    const reset = () => init = original
    return { increment, decrement, reset }
};