let number = 12345678912;
console.time("String");
let i = 0;
let loop = true;
while(loop){
    i++;
    if(i === number){
        console.log("Number Matched");
        loop = false;
    }
}
console.timeEnd("String");