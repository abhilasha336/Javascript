const uno=()=>{
   return `hi one`

}

// const dos=async()=>{  //giving output as promise async
//     setTimeout(()=>{  //probably this is data fetched from an api or database or web
// return `hi two`
//     },3000);
    
// }

const dos=()=>{ // promise that fullfilled(data from db or api) or failed
    return new Promise((resolve,reject) =>{
    setTimeout(()=>{  //probably this is data fetched from an api or database or web
    resolve(`hi two resolved`)   //there shouldn't be two return
    },3000);    
}); 
}
const tres=()=>{
return `hi three`    
}

const call=async()=>{ //there should be more than one promise-await of async
    var one=uno();
    var two=await dos(); //undefined is removed because wait wait for completion of dos function to get promise fulfilled
    var three=tres();
    console.log(one);
    console.log(two);
    console.log(three);

}
call();