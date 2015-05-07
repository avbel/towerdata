# towerdata

[![Build](https://travis-ci.org/avbel/powerdata.png)](https://travis-ci.org/avbel/powerdata)

Node Client library for [PowerData](http://www.towerdata.com)

## Install

Run

```
npm install powerdata
```

## Usage

```js
var towerdata = require("towerdata");
towerdata.config.license = "API-KEY";

towerdata.getInfo({email: "test@test.com"}, function(err, res){});
```
Read [TowerData documentation](http://www.towerdata.com/api/api-documentation) for more details



