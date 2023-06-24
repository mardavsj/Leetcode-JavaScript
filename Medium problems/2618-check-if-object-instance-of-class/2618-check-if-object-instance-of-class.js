function check(obj) {
    var ans = [], cur = obj.__proto__;
    while (cur && cur.name !== "Object") {
        ans.push(cur.constructor.name);
        cur = cur.__proto__;
    }
    return ans;
}

function isObject(val) {
    return !["Null", "Undefined"].includes(/\s(\w+)\]/.exec(Object.prototype.toString.call(val))[1])
}

function checkIfInstanceOf(x, y) {
    return isObject(x) && isObject(y) && y.constructor.name == "Function" && check(x).includes(y.name)
}
