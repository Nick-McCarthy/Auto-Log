const User = require('./user');
const Vehicle = require('./vehicle');

Vehicle.belongsTo(User, {
    foreignKey: '',
});


module.exports = { User, Vehicle };