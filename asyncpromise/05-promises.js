
promiseOne=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
    if(!error){//true case resolve(data fetch from api successfull) of promise
        resolve({name:"abhilash",email:"avlashabhi336@gmail.com"})
    }else{//false case reject(datafecth from api fail) of promises
        reject(`Error:something went wrong`)
    }
    },1000);
});

promiseOne.then((user)=>{ //argunent can be any name which value is returned by resolve method inside promise
    console.log(user);
return user.email
}).then((useremail)=>{ //argument can be any name which value is returned by the above method 
    console.log(useremail);
}).catch((error)=>{ //argument can be any name which value is returned by reject method inside promise
    console.log(error);
}).finally(()=>{
    console.log(`promise either resolved or rejected`);
})



promiseTwo=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
    if(!error){//true case resolve(data fetch from api successfull) of promise
        resolve({name:"abhilashlashly",email:"avlashabhilashlyyy@gmail.com"})
    }else{//false case reject(datafecth from api fail) of promises
        reject(`Error:something went wrong`)
    }
    },1000);
});

async function promiseTwoConsume(){ //async need to handle catch block also so use try and catch
try {
    const response=await promiseTwo
    console.log(response);
} catch (error) {
    console.log(error);
}
}
promiseTwoConsume();



async function getUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Error:`, error);
    }
}
// or 

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
console.log(response.json());
}).catch((error)=>console.log(`errL:`,error))

getUser();



