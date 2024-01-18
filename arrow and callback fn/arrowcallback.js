var sayHellow=function(e){
return "hi"+e}

 console.log(sayHellow("abhi"));

var sayHi=(e)=>{return "hi+"+e} /*===   var sayHi=(e)=>{return "hi+"+e}   equivalent*/ 

console.log("lashly");


var sayNam=(e)=>("hi"+e) // no need to return   if we use ()
console.log(sayNam("avlASH"));

var even=function(e){
    return e%2===0
}

var result0=[2,4,4,8].every(even)
console.log(result0);

var result1=[2,3,4,5].every((e)=>{return e%2===0})
console.log(result1);

var result2=[2,3,4,5].every((e)=>( e%2===0))
console.log(result2);