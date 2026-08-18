const f1 = () => {
  console.log("f1 starts");
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 starts");
  f3();
  console.log("f2 running");
  console.log("f2 ends");
};
const f3 = () => {
  console.log("f3 starts");
  console.log("f3 running");
  console.log("f3 end");
};
function main() {
  console.log("main");
  f1();
  console.log("end main");
}
main();
//synchronous call, javascript is synchronous and single threaded
//if it is asynchronous, we use event loop to manage the call stack
//if it is single threaded, it will be executed in the order it is called that is it only performs one task at a time
//asynchrnous call using timers 1set time call 2 set immediate 3 process.nextTick 4 setInterval