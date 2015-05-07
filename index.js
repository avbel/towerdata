"use strict";
var superagent = require("superagent");

module.exports = {
  config: {
    license: "",
    baseUrl: "https://api10.towerdata.com/person"
  },
  getInfo: function(data, callback){
    var k, query = {};
    for(k in data){
      query[k] = data[k];
    }
    query.license = this.config.license;
    query.format = "json";
    superagent.get(this.config.baseUrl).query(query).end(function(err, res){
      if(err){
        return callback(err);
      }
      callback(null, res.body);
    });
  }
};
