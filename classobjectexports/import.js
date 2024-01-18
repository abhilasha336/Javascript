const User=require("./class.js");
const abhilash=new User("abhilash","avlashabhi336@gmail.com")

console.log(abhilash.getInfo());
console.log(abhilash.courseInfo());
console.log(abhilash.addCourse("java"));
console.log(abhilash.courseInfo());




