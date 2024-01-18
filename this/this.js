console.log("LINE1",this);//here we get {},but in browwser window we get windows object

var user={  
    name:"abhilash",
    courseCount:4,
    NotRegularFunction:function(){  //this not regular function
        console.log("line7",this);
        function sayHello(){   //this is regular function which gives global context window objects
            console.log("line9",this);
        }
        sayHello();
    }
}
user.NotRegularFunction();


