<<<<<<< HEAD
const User = require('./User');
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Project };
=======
const User = require('./User');
const Vehicle = require('./Vehicle');

User.hasMany(Vehicle, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Vehicle.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Vehicle };
>>>>>>> 58fe0de4a8e010ca013808c27dd458f5579bf47a
