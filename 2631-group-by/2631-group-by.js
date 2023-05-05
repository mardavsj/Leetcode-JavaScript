Array.prototype.groupBy = function(fn) {
    let l={};
   for(let i of this){
      l[fn(i)]=[];
     
   }
   
   for(let i of this){
      l[fn(i)].push(i);
      
   }
   return l;
};