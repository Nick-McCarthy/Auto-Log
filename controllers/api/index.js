<<<<<<< HEAD
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;
=======
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const vehicleRoutes = require('./vehicleRoutes');

router.use('/users', userRoutes);
router.use('/vehicles', vehicleRoutes);

module.exports = router;
>>>>>>> 58fe0de4a8e010ca013808c27dd458f5579bf47a
