const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const SlackBot = require('slackbots');

const bot = new SlackBot({
    token: process.env.SLACK_TOKEN, //add the bot token
    name: 'testGigson'
});

//Start handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':male-construction-worker:'
    };

    bot.postMessageToChannel('general', 'Let\'s do this', params);

});

//Error handler
bot.on('error', (err) => console.log(err));

bot.on('message', (data) => {
    if (data.type !== 'message') {
        return;
    }

    let type = data.type,
        user = data.user,
        channel = data.channel,
        text = data.text;

    console.log('type', type)
    console.log('user', user)
    console.log('channel', channel)
    console.log('text', text);

    handleMessage(data); //post a direct message
});

const directMessage = obj => {
    if (obj.channel.startsWith('D')) {

        const params = {
            icon_emoji: ':male-construction-worker:'
        };

        bot.postMessage('general', 'Let\'s do this', params);

    }
}

// const app = express();
// const port = process.env.PORT || 5000;


// //middlewares
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());



// app.get('/', (req, res) => {
//     res.send('Welcome to gigson 2');
// });

// app.post('/hello', (req, res) => {
//     let userName = req.body.user_name;
//     const botPayLoad = {
//         "message": `Hello! ${userName}, welcome to gigon II`
//     }

//     if (userName !== 'slackbot') {
//         return res.status(200).send(botPayLoad);
//     }
//     else {
//         return res.status(200).end();
//     }
// });

// app.post('/hi', (req, res) => {
//     let text = req.body.text;

//     let data = {
//         response_type: 'in_channel', // public to the channel 
//         text: `302: Found -- ${text}`,
//         attachments: [{
//             image_url: 'https://http.cat/302.jpg'
//         }]
//     };

//     res.json(data);

//     // console.log(res);
// })



// app.listen(port, () => console.log(`slackbot started on port ${port}`));



