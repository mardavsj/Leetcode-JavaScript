var areDeeplyEqual = function(f1, f2) {
    let a = Array.isArray(f1)
    let b = Array.isArray(f2)
    if(a && b){
        if(f1.length != f2.length) return false
        for(let i = 0; i < f1.length; i++){
            let x = areDeeplyEqual(f1[i],f2[i])
            if(!x) return false
        }
        return true
    }
    if(a || b) {
        return false
    }

    let x = typeof f1 === 'object' && f1 != null
    let y = typeof f2 === 'object' && f1 != null
    if( !x && !y){
        return f1 === f2
    }
    
    if(x ^ y){
        return false
    }

    if(Object.keys(f1).length != Object.keys(f2).length){
        return false
    }

    for(const key of Object.keys(f1)){
        if(f2[key] === undefined){
            return false
        } 
        
        let x = areDeeplyEqual(f1[key],f2[key])
        if(!x) return false
    }
    return true
};