const pTag = document.getElementById("pTag");

{
  console.group("DOM Node Class Names");
  console.log(pTag);
  // to see p tag class name
  console.log(pTag.constructor.name); // HTMLParagraphElement
  console.log(pTag instanceof HTMLParagraphElement); // true
  console.log(pTag instanceof HTMLBodyElement); // false
  console.log(pTag instanceof HTMLElement); // true
  console.log(pTag instanceof Element); // true
  console.log(pTag instanceof Node); // true
  console.log(pTag instanceof EventTarget); // true
  console.log(pTag instanceof Object); // true

  // const e = new HTMLParagraphElement(); // illegal constructor
  console.log(pTag.__proto__);
  console.groupEnd();
}

{
  console.group("Node Type");
  console.log(pTag.nodeType);
  console.log(pTag.nodeName);
  console.log(pTag.tagName);
  console.log(document.tagName);
  console.log(document.nodeName)
  console.groupEnd();
}

{
  console.group("innerHTML");
  const oldContent = document.body.innerHTML;
  document.body.innerHTML = "New Content";
  document.body.innerHTML += oldContent; // "New Content" removed and it created again
  document.body.innerHTML = oldContent;
  console.groupEnd();
}

{
  console.group("outerHTML");
  // https://javascript.info/basic-dom-node-properties#beware-innerhtml-does-a-full-overwrite
  let div = document.querySelector('div');
  // replace div.outerHTML with <p>...</p>
  div.outerHTML = '<p>A new element</p>'; // (*)
  // Wow! 'div' is still the same!
  console.log(div.outerHTML); // <div>Hello, world!</div> (**)
  console.groupEnd();
}

{
  console.group("nodeValue/data: text node content");
  const comment = document.body.childNodes[1];
  console.log(comment);
  console.log(comment.data);
  console.log(comment.nodeValue);
  console.groupEnd();
}


{
  console.group("textContent: pure Text");
  elem1.innerHTML = "<b>Winnie-the-Pooh!</b>";
  elem2.textContent = "<b>Winnie-the-Pooh!</b>";

  // reading textContent
  const hotDrinks = document.getElementById('hot-drinks');
  console.log(hotDrinks);
  console.log(hotDrinks.textContent);
  console.groupEnd();
}