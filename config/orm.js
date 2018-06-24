var connection = require('../config/connection.js');

var orm = {
    selectAll: function (table, cb) {
        var queryString = 'SELECT * FROM ' + table;
        connection.query(queryString, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    insertOne: function (table, burgerVal, cb) {
        var queryString = 'INSERT INTO ' + table + '(burger_name) VALUES' + '(' + burgerVal + ')';
        connection.query(queryString, burgerVal, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    updateOne: function (table, devouredVal, idVal, cb) {
        var queryString = 'UPDATE ' + table + 'SET devoured = ' + devouredVal + ' WHERE id = ' + idVal;
        connection.query(queryString, devouredVal, idVal, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    }

};



module.exports = orm;