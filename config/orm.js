var connection = require ('./connection.js');


// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
   console.log (ob);
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
    return arr;
}

    
var orm = {

    selectAll : function(tableName, callback){
        var sql = 'select * from ' + tableName;

        connection.query (sql, function(error, response){
            if (error) {
                throw error;
            }
            callback (response);
        });
    },

    insertOne : function (tableName, obj, callback){
        var queryString = "INSERT INTO " + tableName;

        queryString += " (";
        queryString += Object.keys(obj)[0];
        queryString += ") ";
        queryString += "VALUES ('";
        queryString += obj[Object.keys(obj)[0]];
        queryString += "') ";
    
        console.log(queryString);
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          callback(result);
        });
    },

    updateOne: function (tableName, objColVals, condition,callback) {
        var queryString = "UPDATE " + tableName;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          callback(result);
        });
    }

}


module.exports = orm;