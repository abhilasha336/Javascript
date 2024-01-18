const uno=()=>{
   return `hi one`

}

const dos=()=>{
    setTimeout(()=>{
return `hi two`
    },3000);
    
}
const tres=()=>{
return `hi three`    
}

const call=()=>{
    var one=uno();
    var two=dos(); //showing undefined solve this  on 03-async
    var three=tres();
    console.log(one);
    console.log(two);
    console.log(three);

}
call();