function earth() {
  var apple = "APPLE";

  function garden() {
    console.log(apple);
    const mango = "MANGO";

    function planting(){
      console.log("Planting another mango", mango);
      console.log("Planting Apple from earth", apple);
    }

    planting();
  }

  garden();
}

earth();

let magicCount = 0
function magicBox(thing){
  let currentMagic = ++magicCount;

  function show(){
    console.log(`Magic Count ${currentMagic}, Magic Thing is ${thing}`);
  }

  return show;
}

let moon = magicBox("Moon");
let sun = magicBox("Sun");

moon();
sun();