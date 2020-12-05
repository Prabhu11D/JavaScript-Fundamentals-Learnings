const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
  } else if (request.readyState === 4) {
    console.log("Can't fetch data 📃");
  }
});

request.open("GET", 'todos/ammu.json');
request.send();
