const Vehicle = require('../models/vehicle');

// Crear un nuevo vehículo
exports.createVehicle = async (req, res) => {
    const { make, model, year, vin } = req.body;
    const newVehicle = new Vehicle({ make, model, year, vin });

    try {
        const savedVehicle = await newVehicle.save();
        res.status(201).json(savedVehicle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener todos los vehículos
exports.getVehicles = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtener un vehículo por ID
exports.getVehicleById = async (req, res) => {
    try {
        const vehicle = await Vehicle.findById(req.params.id);
        if (vehicle == null) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json(vehicle);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un vehículo por ID
exports.updateVehicle = async (req, res) => {
    try {
        const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedVehicle == null) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json(updatedVehicle);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Eliminar un vehículo por ID
exports.deleteVehicle = async (req, res) => {
    try {
        const deletedVehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if (deletedVehicle == null) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.status(200).json({ message: 'Vehicle deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
