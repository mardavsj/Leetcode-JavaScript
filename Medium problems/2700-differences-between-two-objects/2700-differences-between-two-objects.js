function objDiff(obj1, obj2) {
    const ans={};
    for (let key in obj1){
        if(!(key in obj2)) continue;
        const val1=obj1[key];
        const val2=obj2[key];

        if (typeof val1 !=='object' || typeof val2 !=='object'){
            if (val1 !==val2){
                ans[key]=[val1,val2];
            }
        } else if (Array.isArray(val1) !==Array.isArray(val2)){
            ans[key]=[val1,val2];
        } else{
            const temp=objDiff(val1,val2);
            const len=Object.keys(temp).length;
            if (len==0) continue;
            ans[key]=temp;
        }
    }
    return ans;
};