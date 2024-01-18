var User=function(firstName,userCount){  //defining prototype which can apply for each user when user login
    this.firstName=firstName
    this.userCount=userCount
    this.info=function(){
        console.log(`cousecount is ${this.userCount}`)
    }
    console.log('------------------1-----------');
    console.log(`thisissssssthis`,this);  //act as global context,output global object(i.e window object in global comtext)
    console.log('------------------1-----------');
};
console.log("usercheck",User)  //gives as function defined as prototype output  [Function: User]
console.log(`-------------------first section------------------`);

var notDefined=User("notDefined",0)//here calling as regular function without new keyword,so its is scanned and generate output on lineno:11
console.log(notDefined);   //undefined for execution context because,User "this" act as windows object(treated as global context)

var defined=new User("abhilash",2)  //here functin is not regular,with new keyword
console.log(defined)//undefined because,User "this" act as  defined object(treated as execution context)
// //new constructor is  intstantiataed,copy of variable is created in execution context seperately
var definednew=new User("abhilashav",1)
console.log(definednew)


// //adding proto seperately
User.prototype.getName=function(){  //defining proto using prototype(__proto__ object which have more(constructors,getters,setters))
    console.log(`name is ${this.firstName}`);
    console.log(`thissssisssss11111`,this);
}

defined.getName();
definednew.getName();
console.log(`this is`,this); //{} object in execution context




// //weird syntax

var sam=Object.create(User)  
console.log('sam issss',sam); //{}

var sammy=Object.create(User,{     //weird object syntax  
name:{value:"sammmmmmmy"},
courseCount:{value:3}
})
console.log(`{}sa`,sammy);
console.log(sammy.name);