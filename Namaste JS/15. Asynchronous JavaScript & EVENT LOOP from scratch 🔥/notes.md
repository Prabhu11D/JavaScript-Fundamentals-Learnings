# Asynchronous JavaScript & EVENT LOOP from scratch 🔥

- if anything pushed into the call stack it runs immediatly, it will
  not wait for anything.

- **callback queue** -> where all the callback functions are queued here.
  - it is also called as **task queue**
- **event loop** -> continously check the callback queue, if any callback function found here, it immediatly push this into callstack.
- **microtask queue** it is similar to callback queue, but it has high priority than callback queue
  - Promises and Mutation Observer comes inside this queue

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
![](./pics/13.png)
![](./pics/14.png)
![](./pics/15.png)
![](./pics/16.png)
![](./pics/17.png)
![](./pics/18.png)
![](./pics/19.png)
