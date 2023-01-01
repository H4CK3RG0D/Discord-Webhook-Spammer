const config =  require('./config.json');
const fetch = require('node-fetch');

 module.exports.run = () => {
    async function checkWebhook() {
        const url1 = config.url[0].url1;
        const url2 = config.url[0].url2;
        const url3 = config.url[0].url3;
        const url4 = config.url[0].url4;
        const url5 = config.url[0].url5;
      
        const baseUrl = 'https://discord.com/api/webhooks/'
        const urls = [url1, url2, url3, url4, url5];
      
        for (let i = 0; i < urls.length; i++) {
          const url = urls[i];
          if (!url) {
            console.log(`url${i + 1}: ❌`);
          } else {
            const absoluteUrl = new URL(url, baseUrl);
            const response = await fetch(absoluteUrl);
            const data = await response.json();
      
            if (data.message == 'Invalid Webhook Token') {
              console.log('webhook is invalid');
            } else {
              console.log(`url${i + 1}: ✅`);
            }
          }
        }
      } checkWebhook();
}   




