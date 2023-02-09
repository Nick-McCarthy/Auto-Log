const User = require('./user');
const Vehicle = require('./vehicle');

Vehicle.belongsTo(User, {
    foreignKey: 'vehicleId',
});

User.hasMany(Vehicle, {
    foreignKey: 'userId',
});

module.exports = { User, Vehicle };