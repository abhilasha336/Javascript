var thousand = document.querySelector(".thousand");
const center = document.querySelector(".followers");
thousand.innerHTML=1001
var count=thousand.innerHTML

setInterval(()=>{  //with in timeinterval values changes
if (count<2000){
thousand.innerHTML=count
    count++;
}
},1);

setTimeout(()=>{ //after 5second element text changes to below text
center.innerHTML="completed followers"
},5000)

var test1=document.getElementsByClassName("test1")[1]
test1.innerHTML="hi test1"

var test3=document.getElementById("test2")
test3.innerHTML="hitestttttttttttttttt222222"
test3.addEventListener("mouseover",()=>{
test3.innerHTML="abhilashshshshshshshsh"
test3.style.backgroundColor='violet'  //#use instead of this -> background-color
test3.style.color='red'

})