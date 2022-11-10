
{
  console.group("Logging DOM in Console");
  function logDOM(node) {
    if (node.hasChildNodes()) {
      for (const childNode of node.childNodes) {
        console.log(childNode);
        if (childNode.hasChildNodes()) {
          logDOM(childNode);
        }
      }
    }
  }
  logDOM(document.body);
  console.groupEnd();
}
{
  console.group("Sibling and the Parent");
  console.log(document.body.parentNode === document.documentElement); //true
  console.log(document.body.previousSibling);
  console.log(document.body.previousElementSibling);
  console.log(document.head.nextSibling);
  console.log(document.head.nextElementSibling);
  console.groupEnd();
}
{
  console.group("Element-only navigation");
  /*
  Element return only HTML elements,
  Node return any node, it may be Element, Text Node, Comment Node
  */
  console.log("html parentNode is ", document.documentElement.parentNode);
  console.log("html parentElement is ", document.documentElement.parentElement);
  console.log("logging only Element in body")
  for (const node of document.body.children) console.log(node);
  console.groupEnd();
}


// Searching
{
  console.group("getElementByID");
  console.log(elements);
  // global variable named by id that references the element
  // if we declare something it is overwritten
  elements = "not html element, it is string";
  console.log(elements);

  // how to use id variable with hypen
  console.log(window["red-elem"]);

  const colorElements = document.getElementById('elements');
  console.log(colorElements);

  // const redElement = colorElements.getElementById("red-elem");
  // console.log(redElement); // getElementById only called on document
  console.groupEnd();
}

{
  console.group("querySelectorAll");
  // returns all elements by given CSS rule
  const lastColorElement = document.querySelectorAll('#elements :last-child');
  console.log(lastColorElement);
  console.groupEnd();
}

{
  console.group("querySelector");
  // return first element
  console.groupEnd();
}

{
  console.group("matches");
  // return true or false based on if the element has that CSS.;
  const colorElements = document.querySelector("#elements");
  for (const colorElem of colorElements.children) {
    if (colorElem.matches("#green-elem")) console.log("Green Element Found");
  }
  console.groupEnd();
}

{
  console.group("closest");
  // search for parent if css matches it returns
  const red2Elem = document.getElementById("red2");
  console.log(red2Elem.closest("#elements"));
  console.log(red2Elem.closest("Elem"));
  console.groupEnd();
}


{
  console.group("getElementsBy*");
  // querySelector is more powerful than getElementsBy*,
  // but getElementsBy* are live collections not static collections;

  // see LIVE COLLECTION in index.html
  console.groupEnd();
}

{
  console.group("contains");
  const colorElements = document.getElementById("elements");
  const greenElem = document.getElementById("green-elem")
  console.log(colorElements.contains(greenElem));
  console.groupEnd();
}