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

// Magazine constructor
function Magazine(title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}

Magazine.prototype = Object.create(Book.prototype);

Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine('future of humanity', 'Michio Kaku', '2012', 'April');
console.log(mag1);
console.log(mag1.getSummary());