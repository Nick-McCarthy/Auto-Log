const User = require('./user');
const Vehicle = require('./vehicle');

Vehicle.belongsTo(User, {
    foreignKey: 'vehicle_id',
});

User.hasMany(Vehicle, {
    foreignKey: 'user_id',
});

module.exports = { User, Vehicle };