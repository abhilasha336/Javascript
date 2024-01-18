var states=[
    "Rajasthan",
    "Kerala",
    "Assam",
    1947,
    "Tamilnadu",
    "bihar"
];


for(let i=0;i<states.length;i++){
    if (typeof states[i]!=="string") continue;
        console.log(states[i]);

}
console.log("-------------------------------");
let j=0;
while (j<states.length){
    console.log(states[j]);
    j++;
}


console.log("-------------------------------\\\\\\");
states.forEach((s)=>console.log(s));

console.log("----------loop-of for arrays---------------------\\\\\\");

const names=["youtube","facebook","instagram","whatsapp"];

for(const n of names){
    console.log(n);
}


console.log("----------loop-in for objects---------------------\\\\\\");

const nameValues={
    "yt":"youtube",
    "it":"instagram",
    "fb":"facebook"
}

for (const m in nameValues){
    console.log(m);

}
for (const m in nameValues){
    console.log(`key is: ${m}and value is: ${nameValues[m]}`);
    
}