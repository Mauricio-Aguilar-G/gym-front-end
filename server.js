const express = require('express')
const serveStatic = require('serve-static')
const path = require('path');

const app = express()

app.use('/', serveStatic(path.join(__dirname,'/dist/')));//dist is created with npm run build
app.get(/.*/, function(req, res) {
    res.sendFile(__dirname + "/dist/index.html");
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log('listening on port: '+port);