const urlParse = require('url').parse;

const url=function(request){
    return urlParse(request.url);
}


exports.url = url;
