const fs = require('fs');
const path = require('path');
const config = require('../config.json');

const { run } = require('./message.js');
run();
const messages = require('./message.js').messages;

module.exports.run = () => {
	async function checkFolder() {
		// checks if log folder exists, if not creates it
		const logFolder = path.join(__dirname, '..', 'log');

		fs.stat(logFolder, (err, stats) => {
		if (err) {
			if (err.code === 'ENOENT') {
			fs.mkdir(logFolder, (mkdirErr) => {
				if (mkdirErr) {
				console.error(`Error creating log folder: ${mkdirErr.message}`);
				} else {
				console.log(`Log folder created at ${logFolder}`);
				}
			})
			} else {
			console.error(`Error checking for log folder: ${err.message}`);
			}
			} else if (stats.isDirectory()) {
			console.log(`Log folder already exists at ${logFolder}`);
			} else {
				console.error(`File exists with same name as log folder: ${logFolder}`);
			}
		})
	}

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
	
	checkFolder().then(setTimeout(createLog, 5000));
}
