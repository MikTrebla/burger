var orm = require('../config/orm.js');

var burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (data) {
            cb(data);
        })
    },
    insertOne: function (burgerVal, cb) {
        orm.insertOne('burgers', burgerVal, function (data) {
            cb(data);
        })
    },
    updateOne: function (devouredVal, idVal, cb) {
        orm.updateOne('burgers', devouredVal, idVal, function (data) {
            cb(data);
        })
    }
}

module.exports = burger;