/*""
null
0
NaN
undefined*/   //all this are falsy values

var excists=null;
if (excists){
    console.log("excist value is true",excists)
}

excists=true;
if (excists){
    console.log("excist value is true")
}

var value="2";
if (2==value){

    console.log("excist value is falsly fake true") //here both are not same but pretends same, no strict checks
}

if (2===value){
    console.log("\n excist value is strictly true") //here both are not same but pretends same, strict checks
}

