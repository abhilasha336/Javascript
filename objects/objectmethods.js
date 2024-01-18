var objects={
    Name:"iphone13",
    Category:"apple",
    Version:"13",
    Released:"21/dec",
    colorBought:[],
    addColor:function(colorName){  //not regular function
        this.colorBought.push(colorName)
    },
    colorNumberBought:function(){
        return`${this.Name} has ${this.colorBought.length} colors available`
    },
    info:function(){ //regular function
return `this model: ${this.Name}
        belongs to :${this.Category}
        has version of: ${this.Version}
        released on : ${this.Released}
        coloars available:${this.colorBought}
`
    }

    }

    console.log(objects.colorNumberBought());
    console.log(objects.addColor("red"));
    console.log(objects.colorNumberBought());
    console.log(objects.info());
