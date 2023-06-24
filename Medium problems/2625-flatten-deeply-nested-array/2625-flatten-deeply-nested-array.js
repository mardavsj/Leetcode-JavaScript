var flat = function (arr, n) {
    if(n==0)return arr;
    let arrnew=[];
    for(let i=0;i<arr.length;i++){

        if(Array.isArray(arr[i])){
          let temparr=flat(arr[i],n-1);
          for(let j=0;j<temparr.length;j++)arrnew.push(temparr[j]);
        }
        else arrnew.push(arr[i]);
    }
    return arrnew;
};