var names=["abhi","lashly"]
console.log(names);

var namesLists=new Array("ab","bh","il")
console.log(namesLists);
 console.log( namesLists.length);
 console.log( namesLists.indexOf("il"));


 var even=function(e){
    return e%2===0
}

 var result0=[2,4,4,8].every(even)
console.log(result0);

var result1=[2,3,4,5].every((e)=>{return e%2===0})
console.log(result1);

var result2=[2,3,4,5].every((e)=>( e%2===0))
console.log(result2);

console.log(Array.from("abhilashely"));


