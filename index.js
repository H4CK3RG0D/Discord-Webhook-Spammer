const { EmbedBuilder, WebhookClient } = require('discord.js');
const config = require('./config.json');
const start = require('./start.js');

start.run();

const webhookClients = [];

for (let i = 1; i <= config.url[0].urlNum; i++) {
  const url = config.url[0][`url${i}`];
  if (url) {
    webhookClients.push(new WebhookClient({ url }));
  }
}


const messages = [{        
        content: 'some-content',        
        username: config.profile[0].username,
        avatarURL: config.profile[0].avatarURL
    },
    {
        content: 'caaaaaaa',
        username: config.profile[0].username,
        avatarURL: 'https://i.imgur.com/AfFp7pu.png'
    },
    {
        content: 'message here',
        username: config.profile[0].username,
        avatarURL: 'https://i.imgur.com/AfFp7pu.png'
    }

     // you can add more here
];

const spammer = async () => {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < webhookClients.length; j++) {
            await webhookClients[j].send(messages[j]);
        }
    }
}

spammer();
