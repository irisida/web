# node JS complete guide course

### The node event loop

- Timers
  - Execute setTimeout & setInterval callbacks
- Pending callbacks
  - Execute IO related callbacks that were deferred.
- Poll
  - Retrieve new IO events and execute their callbacks
- Check
  - Execute setImmediate() callbacks
- Close callbacks
  - Execute all 'close' event callbacks

Process.exit() as long as refs == 0. refs is incremented on event registration.

### async code example.

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
