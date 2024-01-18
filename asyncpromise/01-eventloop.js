const uno=()=>{
    console.log("hi one");

}

const dos=()=>{
    setTimeout(()=>{
        console.log("whohhoo");
    },3000);
    console.log("hi two");
    
}
const tres=()=>{
    console.log("hi three");
    
}

uno();
dos();
tres();