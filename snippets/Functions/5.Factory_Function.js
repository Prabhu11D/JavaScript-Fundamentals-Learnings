/**
 * 
 *  creating an object using
 *      Class   -> 0.0002ms
 *      Factory -> 0.0004ms
 * 
 */

const dog = ()=>{
    const sound = "Woof Woof";
    return {
        talk: ()=> console.log(sound)
    };
}

const sniffles = dog();
sniffles.talk();