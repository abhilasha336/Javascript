
sayHello();
function sayHello(){
    console.log("hi hello")
}


  //this will not work,function is assigned to variable object,variable object are call but undefined 

var sayHi=function(a){
    var bill=10;
    console.log(a+bill)
};
sayHi(5);  //undefined


console.log(name) //variable are not scanned before declaration,varible and varible functions are scanned as undefined
var name="abhi";
console.log(name)

