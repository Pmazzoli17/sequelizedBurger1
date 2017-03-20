var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burger', 
  {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Date.now()
    }
   
  }, {
    timestamps:false,
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return burger;
};

// // Import the ORM to create functions that will interact with the database.
// var orm = require('../config/orm.js');

// var burger = {
// 	selectAll: function(cb) {
// 		orm.selectAll('burgers',function(res) {
// 			cb(res);
// 		})
//      },

//     updateOne: function(id,cb) {
//      	orm.updateOne('burgers', id, cb);
//     },

//     insertOne: function(name,cb) {
//      	orm.insertOne('burgers', name, cb);
//     }
//  }
// // Export the database functions for the controller
// module.exports = burger;

