/**
 * 
 * JS don't have class internally, it is syntactic sugar over prototyical inheritance
 * 
 * 
 * 
 */

class Camera {
  constructor() {
    this.what = "Capture the things"
  }
}

class CCTV extends Camera {
  constructor() {
    super();
    this.purpose = "To Monitor Live Events"
  }
}

class Selfie extends Camera {
  constructor() {
    super();
    this.purpose = "To Take Our Face Pics with Phone"
  }
}

let camera = new Camera();
let mi360 = new CCTV();
let sony = new Selfie();

console.log({Camera, CCTV, Selfie});
console.log({camera, mi360, sony});