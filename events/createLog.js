const fs = require('fs');
const config = require('../config.json');

const { run } = require('./message.js');
run();
const messages = require('./message.js').messages;
const e = require('./log/test.txt');

module.exports.run = () => {
	async function createLog() {
		
		const now = new Date();
		const date = now.toISOString().substring(0, 10);
		const time1 = now.toLocaleTimeString().substring(0, 7);
		const time = now.toLocaleTimeString().substring(0, 7).replace(/:/g, '-');

		let daMessages = "";
		for (let i = 0; i < messages.length; i++) {
			  daMessages += messages[i].content + ", ";
			}

		const logData = {
			webhookURLs: config.url[0],
			// gets the content from message array from index.js
			"messages sent": daMessages,
			date: date,
			time: time1
			};

		const logDataJSON = JSON.stringify(logData, null, 2);
		const logFilename = `log-${date}-${time}.json`;
		fs.writeFileSync(`./log/${logFilename}`, logDataJSON, (err) => {
			if (err) {
			  console.error(err);
			}
		  });
	}	
	createLog();
}
