
exports.post= function(body){
      try {
          let out = JSON.parse(body.toString('utf8'));
          out.exist = true;
          return out;
      }catch(e){
          return {exist : false};
      }
}


