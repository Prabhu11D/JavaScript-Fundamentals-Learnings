const getTodos = async ()=>{
    const response = await fetch('todos/ammu.json');

    if(response.status !== 200){
        throw new Error("Can't fetch data");
    }
    const data = await response.json();

    return data;
}


getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err.message));
