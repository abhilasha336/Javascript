class User{
constructor(name,email){
    this.name=name;
    this.email=email;
}
courses=[];
getInfo(){
    return{name:this.email,email:this.name}
}
addCourse(course){
    this.courses.push(course)
    return this.courses 
}
courseInfo(){
    return this.courses
}
};


class GettersSetters{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    courses=[];
    getInfo(){
        return{name:this.email,email:this.name}
    }
    addCourse(course){
        this.courses.push(course)
        return this.courses 
    }
    courseInfo(){
        return this.courses
    }
    };

    var getSetUser=new GettersSetters("nanduunni","mostwanted@gmail.com")
    getSetUser.addCourse("react bootcamp")
    console.log(getSetUser.getInfo());
    console.log(getSetUser.courseInfo());
    console.log(getSetUser.courses);


    class GettersSettersHash{
        constructor(name,email){
            this.name=name;
            this.email=email;
        }
        #courses=[];   //make it private # is treated as private
        getInfo(){
            return{name:this.email,email:this.name}
        }
        addCourse(course){ //act as setters
            this.#courses.push(course)
            return this.#courses 
        }
        courseInfo(){  //act as getters
            return this.#courses
        }
        };
    
        var getSetUser=new GettersSettersHash("nanduunni","mostwanted@gmail.com")
        getSetUser.addCourse("react bootcamp")
        console.log(getSetUser.getInfo());
        console.log(getSetUser.courseInfo());
        console.log(getSetUser.courses);//here can't access  above defined private variables
    


module.exports=User;