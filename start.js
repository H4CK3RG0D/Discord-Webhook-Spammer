const config =  require('./config.json');
const check = require('./check.js');


module.exports.run = () => {
function start() {
        console.log("starting...");
        setTimeout(() => {
            console.log("---------");
            check.run();
        }, 2000)
        setTimeout(() => {
            console.log("---------");
        }, 3000);
        setTimeout(() => {
            console.log("Message sent!");
        }, 1000);

    } start()
}

