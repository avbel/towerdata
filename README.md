# towerdata

[![Build](https://travis-ci.org/avbel/towerdata.png)](https://travis-ci.org/avbel/towerdata)

Node Client library for [TowerData](http://www.towerdata.com)

## Install

Run

```
npm install towerdata
```

## Usage

```js
var towerdata = require("towerdata");
towerdata.config.license = "API-KEY";

towerdata.getInfo({email: "test@test.com"}, function(err, res){});
```
Read [TowerData documentation](http://www.towerdata.com/api/api-documentation) for more details



