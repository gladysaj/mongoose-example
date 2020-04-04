const mongoose = require("mongoose");

module.exports = mongoose.model("Perro", { name: String});

// Mongoose toma el modelo y crea una colección en la db ex Perro ===> perros 