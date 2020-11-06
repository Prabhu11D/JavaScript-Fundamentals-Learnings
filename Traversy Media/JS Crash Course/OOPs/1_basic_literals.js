// const s1 = "Hello";
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// window.alert(1);
// alert(1);

// console.log(navigator.appVersion);
// console.log(navigator.platform);

// Object literals
const book1 = {
    title: 'theory of everything',
    author: 'Michio Kaku',
    year: '2010',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book2 = {
    title: 'future of humanity',
    author: 'Michio Kaku',
    year: '2012',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

console.log(book1.getSummary());
console.log(Object.keys(book1));
console.log(Object.values(book1));

