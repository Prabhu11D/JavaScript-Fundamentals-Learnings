/**
 * 
 * 
 * 
 */

/* let user = {}
user.staticMethod = function(){
    console.log("Static Method . . . ");
}
user.__proto__.static = function(){
    console.log("Static Prototype . . . ");
}
 */

// ====================== Static Methods

class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
  static createToday(){
      return new this("Today's digest", new Date())
  }
}

let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];
articles.sort(Article.compare);
console.log(articles[0]);

let todayNews = Article.createToday();
console.log(todayNews.title);


// ========================= Static Properties

Article.author = "Prabhu";
console.log(Article.author);


// ========================= Inheritance of Static properties and methods
class Animal {
  static planet = "Earth";
  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }
  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbits = [
  new Rabbit("White Rabbit", 10),
  new Rabbit("Black Rabbit", 5)
];
rabbits.sort(Rabbit.compare);
rabbits[0].run();

console.log(Rabbit.__proto__ === Animal);