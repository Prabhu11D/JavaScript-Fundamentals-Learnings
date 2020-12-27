let name = "Global Name";

function Name(x){
    this.name = x,
    this.say = function(){
        console.log(name)
        console.log(this.name);
    }

}

let n = new Name("Prabhu");
n.say();