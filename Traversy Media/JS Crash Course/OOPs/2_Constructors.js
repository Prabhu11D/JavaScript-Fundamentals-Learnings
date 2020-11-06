// construtor
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.title.toUpperCase()} was written by ${this.author} in ${this.year}`;
    }
}

// Instatiate an object
const book1 = new Book('future of humanity', 'Michio Kaku', '2013');
const book2 = new Book('Theory of Everything', 'Michio kaku', '2010');

console.log(book1.getSummary());