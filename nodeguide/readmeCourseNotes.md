# Debugging basics

### Q: What are the Error types?

A: The following error types are what you are usually facing:

- Syntax error - syntactic errors that prevent your code from loading/compiling.
- runtime error - crashing code that compiles but breaks at runtime.
- logic errors - unexpected behaviour, not crashing.

### What is The node event loop?

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

# Syntax basics

Node applications can be written in javascript or typescipt and compiled down to JS with some enhanced type checking. Much is made of the non-blocking, single threaded and asynchronous nature of node code.

### Q: Can I see some async code with a Promises example?

A: Of course. A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

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

### Thoughts on template engines

- Googling seems to throw up handlebars, ejs and jade (pug) as the mains, and funnily enough that's what max covers in the course.
- First impressions are that I'm not wild about the ergonomics of ejs `<%= value_to_render %>` syntax.
- handlebars `{{ value_to_render }}` model is more reminiscent of JSX in react.
- pug (jade) seems to be the run of the litter and yet it's stark minimalism appeals. Sure the whitespace leaning is a little bit of a throw considering the course is focusing on nodejs and js, but I like it's brutal minimalist approach.

[handlebars](https://handlebarsjs.com/)
[ejs](https://ejs.co/)
[pug](https://pugjs.org/api/getting-started.html)

### A walkthrough of the MVC pattern

- TBC
