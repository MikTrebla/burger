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

        connection.query('INSERT INTO ' + table + ' (burger_name) VALUES ("' + burgerVal + '")', function (err, results) {
            if (err) throw err;
            cb(results);
        });
    },

    updateOne: function (table, devouredVal, id, cb) {

        connection.query('UPDATE ' + table + ' SET devoured =' + devouredVal + ' WHERE id =' + id, function (err, results) {
            if (err) {
                console.log(err) ;
            }
            cb(results);
            console.log(cb(results));
        });
    }

};



module.exports = orm;