const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve("Data Received ▶️ " + request.responseText);
      } else if (request.readyState === 4) {
        reject("Couldn't fetch the data 👎");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos/physics.json")
  .then((data) => {
    console.log(data);
    return getTodos("todos/prabhu.json");
  })
  .then((data) => {
    console.log(data);
    return getTodos("todos/ammu.json");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
