const userData = require('./userData.json');
const vehicleData = require('./vehicleData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const vehicle of vehicleData) {
        await Vehicle.create({
            ...vehicle,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }

    process.exit(0);
};

seedDatabase();
