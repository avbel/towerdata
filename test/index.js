var nock = require("nock");
var api = require("..");

nock.disableNetConnect();

api.config.license = "license";

describe("getInfo()", function(){
  afterEach(function(){
    nock.cleanAll();
  });

  it("should be called with data", function(done){
    var r = nock("https://api10.towerdata.com").get("/person?email=test%40test.com&license=license&format=json").reply(200, {});
    api.getInfo({email: "test@test.com"}, function(err){
      if(err){
        return done(err);
      }
      r.isDone().should.be.true;
      done();
    });
  });
  it("should fail on http error", function(done){
    var r = nock("https://api10.towerdata.com").get("/person?email=test%40test.com&license=license&format=json").reply(404, {});
    api.getInfo({email: "test@test.com"}, function(err){
      if(err){
        return done();
      }
      done(new Error("An error should be thrown"));
    });
  });
});
