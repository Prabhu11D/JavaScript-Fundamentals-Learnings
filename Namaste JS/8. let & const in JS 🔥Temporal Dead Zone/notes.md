# let & const in JS 🔥Temporal Dead Zone

- var variable are hoisted, and it can be accessed anywhere in the Program.
- `let variable` are hoisted, and it can't be accessed before the initialization. it is hoisted in different space not global space.
- **Temporal Dead Zone** - memory is allocated for variable in seperate space, means undefined, but value is still not initialized. if you try to access the variable which is inside Temporal Dead Zone, it throws `ReferenceError, can't access variable before initialization`
- `let & const` maintains the variable in seperate space, not attached to global object
- it restrict the redeclaration, JS will not execute anything if variables with let and const redeclared.
  ```js
  let a = 10;
  let a = 20;
  ```
- `const` is even more strict than `let`, means you can't reassign the value.

![](./pics/1.png)
![](./pics/2.png)
![](./pics/3.png)
![](./pics/4.png)
![](./pics/5.png)
![](./pics/6.png)
![](./pics/7.png)
![](./pics/8.png)
![](./pics/9.png)
![](./pics/10.png)
![](./pics/11.png)
![](./pics/12.png)
