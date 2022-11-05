// makes loose bound to tightbound

let button = function (name) {
  this.name = name;
}

button.prototype.click = function () {
  console.log(`${this.name} Clicked`);
}

button.newClick = function () {
  console.log(`${this.name} New Clicked`);
}

let addBtn = new button("Add");
let looseAddBtn = addBtn.click;
let tightAddBtn = addBtn.click.bind(addBtn)


looseAddBtn();
tightAddBtn();