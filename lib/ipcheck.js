exports.ipcheck = function (request){
    let h = request.headers;
    if(typeof h['X-Forwarded-For'] !== "undefined")
        return h['X-Forwarded-For'].split(',')[0];
    if(typeof h['x-forwarded-for'] !== "undefined")
        return h['x-forwarded-for'].split(',')[0];
    let r = request.connection;
    if(typeof r.remoteAddress !== "undefined")
        return  r.remoteAddress;
    let s = request.socket;
    if(typeof s.remoteAddress !== "undefined")
        return s.remoteAddress;
}



