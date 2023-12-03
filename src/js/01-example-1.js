/*
 * Macro tasks and Microtasks
 * ScriptQueue
 * PromiseJobs:
 */

console.log('1'); // synchronus operation, (1) //

setTimeout(() => console.log('2'), 0); // asynchronous operation, macro task, (6) //

const promise = new Promise(res => {
  console.log('3'); // synchronus operation, (2) //
  res('4'); // asynchronous operation, promise (5) //
});

const test = async () => {
  console.log('5'); // synchronous operation, (3)
  const res = await new Promise(resolve => setTimeout(() => resolve('6'), 0)); // async..., (7) //
  return res;
};

test().then(data => console.log(data));
promise.then(data => console.log(data));

console.log('7'); // synchronous operation, (4)

// Result: => 1, 3, 5, 7, 4, 2, 6 //
