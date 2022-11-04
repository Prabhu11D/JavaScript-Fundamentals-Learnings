# TRUST ISSUES with setTimeout()

- callback only executed once the callstack is clear, other callbacks will
  wait for callstack to be empty.
- setTimeout of 0ms is used to defer some tasks

![](./pics/1.png)
![](./pics/2.png)
