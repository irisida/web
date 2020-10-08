# nodejs - The complete guide course

[course link](https://www.udemy.com/course/nodejs-the-complete-guide)

# Course notes

### The node event loop

Each phase has a FIFO queue of callbacks to execute. While each phase is special in its own way, generally, when the event loop enters a given phase, it will perform any operations specific to that phase, then execute callbacks in that phase's queue until the queue has been exhausted or the maximum number of callbacks has executed. When the queue has been exhausted or the callback limit is reached, the event loop will move to the next phase, and so on.

Since any of these operations may schedule more operations and new events processed in the poll phase are queued by the kernel, poll events can be queued while polling events are being processed. As a result, long running callbacks can allow the poll phase to run much longer than a timer's threshold

- Timers
  - Execute `setTimeout` & `setInterval` callbacks
- Pending callbacks
  - Execute IO related callbacks that were deferred.
- Poll
  - Retrieve new IO events and execute their callbacks
- Check
  - Execute `setImmediate()` callbacks
- Close callbacks
  - Execute all `close` event callbacks

`Process.exit()` as long as refs == 0. refs is incremented on event registration and essentially acts as a loop cycle counter of events to be handled in the loop.

### async code with Promises example.

A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

```javascript
const fetchData = () => {
	const promise = new Promise((res, rej) => {
		setTimeout(() => {
			res('Done');
		}, 1500);
	});
	return promise;
};

setTimeout(() => {
	fetchData().then((text) => {
		console.log(text);
	});
}, 1);

console.log('Startup');
```
