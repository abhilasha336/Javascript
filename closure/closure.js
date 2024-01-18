 function hiAll(){
    var name="abhilash"
    console.log("hiAll initiated  1st execution context on globel context")
    function hiName(){
        console.log("inside functin  2nd execution context on 1st execution context",name);
    }
   return hiName;   //here reference of fucntion is called,so unmounting of 2nd and 1st execution context from global context is not possible

}

// hiAll(); //actually this is returning of refernce of 2nd fucntion(exection context 1 and 2 is locked)

var refValOfHiAll=hiAll();
refValOfHiAll();//closure


function doAdd(x){
    return(function doAddY(y){
        return x+y;
    })
}

var addX=doAdd(4) //addX hold reference of inner function
console.log(addX(5)); 

console.log(doAdd(8)(8));