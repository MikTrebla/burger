var orm = require('../config/orm.js');

var burger = {
    selectAll: function (cb) {
        orm.selectAll('burgers', function (data) {
            cb(data);
        })
    },
    insertOne: function (cols, burgerVal, cb) {
        orm.insertOne('burgers', cols, burgerVal, function (data) {
            cb(data);
        })
    },
    updateOne: function (devouredVal, id, cb) {
        orm.updateOne('burgers', devouredVal, id, function (data) {
            cb(data);
        })
    }
}

module.exports = burger;