const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
let fs = require('fs');

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/mailbox', (req, res) => {
    res.sendFile(`${__dirname}/data/inbox.json`);
});

app.get('/mail-preview', (req, res) => {

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