const config =  require('../config.json');
const check = require('./check.js');

module.exports.info = {
	"name":"start"
}
  
module.exports.run = () => {
function start() {
        console.log("starting...");
        setTimeout(() => {
            console.log("---------");
            check.run();
        }, 2000)
        setTimeout(() => {
            console.log("Message sent!");
        }, 5000);

    } start()
}

