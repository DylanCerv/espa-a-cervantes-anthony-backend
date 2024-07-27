const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/vehicles', vehicleController.createVehicle);
router.get('/vehicles', vehicleController.getVehicles);
router.get('/vehicles/:id', vehicleController.getVehicleById);
router.put('/vehicles/:id', vehicleController.updateVehicle);
router.delete('/vehicles/:id', vehicleController.deleteVehicle);

module.exports = router;
