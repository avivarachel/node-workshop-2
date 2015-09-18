var http = require('http');
var fortune = require('./library/fortune');

var requestListener = function  (req, res){
    res.writeHead(200);
    res.end(fortune.getGetFortune());
};

var server = http.createServer(requestListener);

server.listen(process.env.PORT, process.env.IP);
