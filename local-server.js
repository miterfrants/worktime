'use strict';
const http = require('https');
const staticAlias = require('node-static-alias');
const fs = require('fs');
var fileServer = new staticAlias.Server('./', {
    alias: [{
        match: /\/worktime\/([a-z|A-Z|\-|_|0-9]+\/){0,}$/,
        serve: 'index.html'
    }]
});

const options = {
    key: fs.readFileSync('ssl/key.pem'),
    cert: fs.readFileSync('ssl/server.crt')
};

http.createServer(options, function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(443);
console.log('Sever Launch');