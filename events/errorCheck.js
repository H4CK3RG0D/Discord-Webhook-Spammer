const fs = require('fs');
const config = require('../config.json');
const errorCode = require('./errorCode.json');

// module.exports.run = () => {
    async function findError() {
      
    const urls = config.url[0];
    let found = false;
      for (const key in urls) {
        if (key.startsWith("url#")) {
          const url = urls[key];
          if (url) {
            found = true;
            return;      
        }
      }    
    }
    // if not found console log the error code 3 and description
    if (!found) {
      console.log(`Error code: ${errorCode[3].code}`);
      console.log(`Error description: ${errorCode[3].description}`);
    }
  }
    findError();
    module.exports = { findError };
// }