"use strict";
exports.cookies=function (){
    this.parse = function (request){
        let list = {},
            rc = request.headers.cookie;
         rc && rc.split(';').forEach(
             function( cookie ) {
                 let parts = cookie.split('=');
                 list[parts.shift().trim()] = decodeURI(parts.join('='));
             }
         );
         return list;
    }
    this.prepare = function(){

    }

}
