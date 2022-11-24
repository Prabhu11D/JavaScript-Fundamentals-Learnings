console.log("Map");

const bio = new Map();

bio.set("name", "Prabhu");
bio.set("age", 23);
bio.set("Profession", "Web Development");
bio.set(bio, bio);

console.log({ bio, size: bio.size });

bio.forEach((v, k) => console.log(`KEY ${k} ---> VALUE ${v}`));

const bioObj = {
  name: "Prabhu",
  age: 23,
  Profession: "Web Development"
}

console.log({bioObj})

// bioObj.forEach((v, k) => console.log(k, v)); // not forEach function
for(const [k,v] of Object.entries(bioObj)) console.log(k, v)