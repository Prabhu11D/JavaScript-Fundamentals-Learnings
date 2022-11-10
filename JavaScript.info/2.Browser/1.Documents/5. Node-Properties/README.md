# Node Properties

- EventTarget – is the root “abstract” class for everything.
- The document global object belongs exactly to this class. It serves as an entry point to the DOM.
- the full set of properties and methods of a given node comes as the result of the chain of inheritance.
- To see the DOM node class name, we can recall that an object usually has the constructor property. It references the class constructor
- DOM nodes are regular JavaScript objects. They use prototype-based classes for inheritance.
- In the specification, DOM classes aren’t described by using JavaScript, but a special Interface description language (IDL), that is usually easy to understand.
- 