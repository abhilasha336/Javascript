class User{ //every class has constructor by default
 constructor(name,email){ //like function prototype
    this.name=name
    this.email=email
 }
 #newName="avlash";//this variable
 // is reserved for this class only which cannot be inherited
 getInfo(){
    return {name:this.name,email:this.email}
 }
 static login(){   //this function is reserved for this class only which cannot be inherited
    return `private login enabled`
 }
 login2(){
    return `all login enabled`
 }
}

class SonUser extends User{         //object is going to create SonUser's object
    constructor(name,email){ //this constructor inherit the properties of parent class
        super(name,email)
    }
    login2(){
        return `all login from son enabled`
     }
}

var newUser=new SonUser("abhi","avlashabhi336@gmail.com") //this capability we got to give paramter beacuse of constructor and super kewword in SonClass
console.log(newUser.getInfo());
// console.log(newUser.login());  //here gives function is not function beacuse its soo private of class User
console.log(newUser.login2());
console.log(newUser.newName); //here also #newName is a private variable