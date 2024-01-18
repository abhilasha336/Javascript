function getRole(name,roles){
    switch (name){
        case "father": return(`${name} is a ${roles}`)
        break;// no needed if return is used

        case "mother":return(`${name} is a ${roles}`)
        default:    return(`${name} is a ${roles}`)

        break;
    }
}

getRole("lashly","king");
console.log(getRole("father","guardian"))

var getRoles=getRole("mother","smallguardian")
console.log(getRoles)






var getRoless=function(name,roles){
    switch (name){
        case "father": return(`${name} is a ${roles}`)
        break;// no needed if return is used

        case "mother":return(`${name} is a ${roles}`)
        default:    return(`${name} is a ${roles}`)

        break;//
    }
}


console.log(getRoless("mother","localguardian"));