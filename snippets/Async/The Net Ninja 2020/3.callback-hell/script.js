const getTodos = (resource, callback)=>{
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{
        if(request.readyState === 4 && request.status === 200){
            callback(undefined, request.responseText);
        }else if(request.readyState === 4){
            callback("Couldn't fetch the data 👎", undefined);
        }
    });

    request.open('GET', resource);
    request.send();
};

// callback hell
getTodos('todos/prabhu.json',(err, data) =>{
    console.log("Callback 🔥");
    console.log(data);
    getTodos('todos/ammu.json', (err, data)=>{
        console.log("Callback 🔥");
        console.log(data);
        getTodos('todos/physics.json', (err, data)=>{
            console.log("Callback 🔥");
            console.log(data);
        });
    });
});