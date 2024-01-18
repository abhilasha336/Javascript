var myMap=new Map();
myMap.set("name","abhilash")
myMap.set("lastname","a")
for(let [key,value] of myMap){
    console.log(`key is ${key} and value is ${value}`);
}
myMap.forEach((value,key)=>{
    console.log(`key is: ${key} value is:${value}`);
})

