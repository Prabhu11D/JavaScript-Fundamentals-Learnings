let point = {
    x: 10,
    y: 20
}

let point3D = {
    z: 30
}
point3D.__proto__ = point;

console.log(point3D.prototype);