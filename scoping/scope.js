var name="abhi";

father();
function father(){
    var name="lash";
    console.log("line 4",name)

    son();
    function son(){
        console.log("line 7",name)

    }
}