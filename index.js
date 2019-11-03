"use strict";
const http = require('http');
/*const httpBrain = new (
        require('./lib/brain')
    ).httpServerBrain();
const httpBrainInside = new (
        require('./lib/brain')
    ).httpServerBrain();
*/
const httpServerTools = {
    ipcheck  : (require('./lib/ipcheck.js')).ipcheck,
    post     : (require('./lib/post.js')).post,
    url      : (require('./lib/url.js')).url,
    cookies  : require('./lib/cookies.js')
}



exports.server = function(port){
    this.start = function(){
        httpServer.listen(httpPort);
    }
    const loginCheck = async function(httpReq){
        return false;
    }
    const packetLogic = async function (httpReq, httpRes){
         let UID = loginCheck(httpReq);
         if(UID === false){
             let out = await httpBrain.run(httpReq);
         }else{
             let out = await httpBrainInside.run(httpReq);
         }
         httpRes.writeHead(
             200,
             {
                'Set-Cookie'   : 'cookie=iscookie',
                'Content-Type' : 'application/json'
             }
         );
         httpRes.write(out);
         httpRes.end();
    }
    let brain = []
    const httpPort = port;
    let httpServer = http.createServer(function (req, res) {
            let body = '';
            req.on('data', function (data) {
                body = data;
            });
            req.on('end', async function () {
                let simpleReq = {
                    ip     : httpServerTools.ipcheck(req),
                    post   : httpServerTools.post(body),
                    url    : httpServerTools.url(req),
                    method : req.method
                }
                packetLogic(req, res));
            });
    });
    let thisBrain = this;
}



