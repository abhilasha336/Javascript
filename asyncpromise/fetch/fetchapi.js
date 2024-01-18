//run this command-> npm install node-fetch 
const { log } = require('console');
const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/users')
    .then((responseOne) => responseOne.json())
    .then((data) => {
        console.log(`*************************`);
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    
  var call= async ()=>{
    try {
        var response=await fetch('https://jsonplaceholder.typicode.com/users')
console.log(`---------`,await response.json()); //with out await for response to json otherwise show(promise pending state)
    } catch (error) {
        console.log(`err:`,error);
    }
    }

    call();