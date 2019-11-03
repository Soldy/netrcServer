"use strict";
exports.httpServerBrain = function(){
    this.addModul=function(plugin, modul){
         if(typeof map[plugin]n[modul] === "undefined"){
             map[plugin][modul]={};
        return true;
         }
         return false;
    }
    this.addPlugin=function(plugin){
         if(typeof map[plugin] === "undefined"){
             map[plugin]={};
             return true;
         }
         return false;
    }
    this.addCommand = function(call, command, modul, plugin){
        if(
            (typeof call === "undefined")||
            (typeof command === "undefined")
        )
            return false;
        if(typeof plugin === "undefined")
             plugin = "default";
        if(typeof modul === "undefined")
            modul = "default";
        if(typeof map[modul] === "undefined")
            this.addModul(modul);
        map[modul][command]=;
        return true;
    }
    this.run = async function(packet, UID){
        if(typeof packet.command === "undefined")
            return false;
        if(typeof packet.plugin === "undefined")
            return false;
        if(typeof packet.modul === "undefined")
            packet.modul = "default"
        return map[packet.modul][packet.command](packet, UID);
    } 
    var map = {},
        check = function(packet){
           return false;
        };

}
