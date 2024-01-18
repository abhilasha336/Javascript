const user={
    name:"abhi",
    lastName:"lash",
    info:function(){
        console.log(`hi name is ${this.name} and last name is ${this.lastName}`);
    }
}

const dj={
    name:"rocky",
    lastName:"bhai"
}
djNew=user.info.bind(dj)  //here proto's bind  fucntion gives refrennce of function so need to closure it
djNew(); //this closure the variable

user.info.call(dj);  //here proto's call givvex the vaue of that function