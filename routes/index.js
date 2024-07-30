const express = require('express');
const { text } = require('stream/consumers');
const router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello, World!",
        user: "Charles",
        added: new Date() 
    }
];

router.get('/', (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post('/new', (req, res) => {
    let textMessage = req.body.messageText;
    let messageUser = req.body.user;

    messages.push({ text: textMessage, user: messageUser, added: new Date() });
    res.redirect("/");
});

router.get('/message/:index', (req, res) => {
    let messageIndex = req.params.index;
    let message = messages[messageIndex];

    if (message) {
        res.render('message', {title: 'Message details', message: message});
    }
    else {
        res.status(404).send('Message not found');
    }
});

module.exports = router;