// Burger models

// The burger has a burger_name attribute of type DataTypes.String
// and a devoured attribute that is false by default

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Burger.hasOne(models.Customer);
      }
    }
  });
  return Burger;
};




// var Sequelize = require('sequelize');

// module.exports = function(sequelize, DataTypes) {
//   var burger = sequelize.define('burger', {
//     burger_name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     devoured: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     }
//   }, {
//     classMethods: {
//       associate: function(models) {
//         burger.hasOne(models.Customer);
//       }
//     }
//   });
//   return burger;
// };

//     burger_name: DataTypes.STRING,
//     devoured: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false
//     },
//     date: {
//       allowNull: false,
//       type: Sequelize.DATE,
//       defaultValue: Date.now()
//     }
   
//   }, {
//     timestamps:false,
//     classMethods: {
//       associate: function(models) {
//       }
//     }
//   });
//   return burger;
// };

