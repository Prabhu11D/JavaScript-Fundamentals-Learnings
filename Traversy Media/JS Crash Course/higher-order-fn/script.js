const company = [
    {name:'one',cat:"finance",start:1900,end:2010},
    {name:'two',cat:"Retail",start:1910,end:2011},
    {name:'three',cat:"Auto",start:1900,end:2016},
    {name:'four',cat:"Retail",start:1940,end:2000},
    {name:'five',cat:"Tech",start:1920,end:2002},
    {name:'six',cat:"Auto",start:1980,end:2003},
    {name:'seven',cat:"Food",start:1990,end:2005},
    {name:'eight',cat:"Education",start:1970,end:2006},
    {name:'nine',cat:"Retail",start:1960,end:2006}
];

const ages = [11,45,23,66,32,16,24,56,34,43,78,54];



// ================== ForEach ===========================
// normal for loop--------------------------
// for(let i=0; i<company.length; i++){
//     console.log(company[i]);
// };

// forEach-----------------------------------
company.forEach(function(i){
    console.log(i.cat);
});




// ================ FILTER ============================
// normal method-----------------------------
// const canDrink = [];
// for(let i=0;i<ages.length;i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i]);
//     }
// };
// console.log(canDrink);

// filter method ----------------------------
// const canDrink = ages.filter(function(x){
//     if(x>=21){
//         return true;
//     }
// });
// console.log(canDrink);

// filter method with ES6---------------------
const canDrink = ages.filter(age => age>=21);
console.log(canDrink);

const retailCompany = company.filter(x => x.cat == 'Retail');
console.log(retailCompany);




// =================== MAP =========================
const companyCat = company.map(function(x){
    return x.cat;
});

console.log(companyCat);
const testMap = company.map(x => `${x.name} [${x.start} - ${x.end}]`);
console.log(testMap);

const ageAddMul = ages.map(x => x*2).map(x=> x+100);
console.log(ageAddMul);



// =============== SORT ===================
const sortedCompany = company.sort(function(x,y){
    if(x.start > y.start){
        return 1;
    }else{
        return -1;
    }
});
console.log(sortedCompany);

const sortAges = ages.sort((a,b) => a-b);
console.log(sortAges);




// ================ REDUCE ===================
const sumAge1 = ages.reduce((x,y) => x+y,0);
console.log(sumAge1);

const sumAge2 = ages.reduce(function(x,y){
    return x+y;
});
console.log(sumAge2);


// All
const num = [3,1,3,6,2,1,5,8,4,8,9,5,4,7,8,4];
const filtered = num.map(x => x*2)
.filter(x => x<12)
.sort((a,b)=> a-b)
.reduce((a,b) => a+b);
console.log(filtered);

let sum = 0;
for(let i=0;i<num.length;i++){
    m = num[i]*2;        // map
    if(m<12){            // filter
        sum += m;        // reduce
    }
};
console.log(sum);