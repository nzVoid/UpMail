const express = require('express');
const app = express();
const jsonParse = express.json();
const path = require('path');
const cors = require('cors')
let fs = require('fs');

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))


app.get('/mailbox', (req, res) => {
    res.sendFile(`${__dirname}/data/inbox.json`);
});

app.post('/send', jsonParse, function (request,response) {
    let fileName = path.resolve(__dirname, './data/send.json');
    let data = fs.readFileSync(fileName, 'utf8');
    let send = JSON.parse(data);
    let newPost = request.body;
    send.push(newPost)
    fs.writeFileSync(fileName, JSON.stringify(send))
    response.send(send);
});

app.get('/mailbox/:postId', function (request, response){
    let postId = request.params["postId"]
    let fileName = path.resolve(__dirname, './data/inbox.json');
    let data = fs.readFileSync(fileName,'utf8');
    let posts = JSON.parse(data)
    response.send(posts[postId])
});

app.listen(3001, () => {
    console.log('Application listening on port 3001!');
});