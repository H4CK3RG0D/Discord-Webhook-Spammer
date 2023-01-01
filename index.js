const { EmbedBuilder, WebhookClient } = require('discord.js');
const config = require('./config.json');
const start = require('./start.js');

start.run();

const webhookClients = [
    new WebhookClient({ url: config.url[0].url1 }),
    new WebhookClient({ url: config.url[0].url2 }),
    new WebhookClient({ url: config.url[0].url3 })
  ];

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
        content: 'eeee',
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
