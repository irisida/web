const fs = require('fs');

const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;

	// the root url handler case
	if (url === '/') {
		res.write('<html>');
		res.write('<head><title>written from node</title></head>');
		res.write('<body>');
		res.write(
			'<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>'
		);
		res.write('</body>');
		res.write('</html>');
		return res.end();
	}

	/*
  handles the redirect to /message above
  and writes a file to the same directory
*/
	if (url === '/message' && method === 'POST') {
		const body = [];
		/*
    event listener that handles the data event
    and adds the chunk of data to the body object
    we have created.
    */
		req.on('data', (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});

		/* calls return on the 'end' event */
		return req.on('end', () => {
			const parsedBody = Buffer.concat(body).toString();
			const message = parsedBody.split('=')[1];

			// async action to write the file
			fs.writeFile('message.txt', message, (err) => {
				/*
        completion handler, it also receives
        an error that can be handled, if no error
        then the value on err is null
      */
				res.statusCode = 302;
				res.setHeader('Location', '/');
				return res.end();
			});
		});
	}

	// runs when no conditional above is matched
	//console.log(req.url, req.method, req.headers);
	res.setHeader('Content-Type', 'text/html');
};

module.exports = requestHandler;
