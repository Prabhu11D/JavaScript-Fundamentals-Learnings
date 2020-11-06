// construtor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

// getSummary
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}
// getAge
Book.prototype.getAge = function(){
    const year = new Date().getFullYear() - this.year;
    return `${this.title} is ${year} years old`;
}

// Instatiate an object
const book1 = new Book('future of humanity', 'Michio Kaku', '2013');
const book2 = new Book('Theory of Everything', 'Michio kaku', '2010');

// console.log(book1.getSummary());
// console.log(book1.getAge());

// revise
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

console.log(book1);
book1.revise('2020');
console.log(book1);