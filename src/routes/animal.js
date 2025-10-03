const express = require("express");
const router = express.Router();
const animalSchema = require("../modules/animalModel");

router.post("/animals", (req, res) => {
    const animal = animalSchema(req.body);
    animal
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/animalst", (req, res) => {
    animalSchema
        .find()  // Buscar todos los registros de animales en la base de datos
        .then((animals) => res.json(animals))  // Devolver los animales como respuesta
        .catch((error) => res.json({ message: error }));  // Si ocurre un error, devolver un mensaje de error
});
module.exports = router;
