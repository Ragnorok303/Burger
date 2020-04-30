var connection = require("../config/connection");

var orm = {
    selectAll: function (tableInput, rep) {
        var queryString = "SELECT * FROM" + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            rep(result);
        });
    },

    insertOne: function (tableInput, val, rep) {
        connection.query('INSERT INTO ' + tableInput + "(burger_name) VALUES ('" + val + "');", function (err, result) {
            if (err) {
                throw err;
            }
            rep(result);
        });
    },

    updateOne: function (tableInput, condition, rep) {
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function (err, result) {
            if (err) throw err;
            rep(result);
        })
    },

    deleteOne: function (tableInput, condition, rep) {
        var queryString = "DELETE FROM " + tableInput;
        queryString += " WHERE id=";
        queryString += condition;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            rep(result);
        });
    }
};

module.exports = orm;