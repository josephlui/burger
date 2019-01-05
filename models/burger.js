var orm = require ('../config/orm.js');

const tableName = 'burgers';
var burger = {

    retrieveAll: function(callback){
        orm.selectAll(tableName,callback);
    },

    addBurger: function (obj, callback){
        orm.insertOne(tableName,obj, callback);
        
    },
    devourBurger: function (obj, condition, callback){
        orm.updateOne(tableName, obj, condition, callback);
    }
};


module.exports = burger;