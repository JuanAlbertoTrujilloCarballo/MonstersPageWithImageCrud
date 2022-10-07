const db = require("../models");
const Monster = db.monsters;
const Op = db.Sequelize.Op;

// Create and Save a new Monster
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.title || !req.body.weakness){
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Monster
  const monster = {
    name: req.body.name,
    title: req.body.title,
    weakness: req.body.weakness,
    filename: req.file ? req.file.filename : ""
  }

  // Save Monster in the database
  Monster.create(monster).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the monster"
    })
  });
};

// Retrieve all Monsters from the database.
exports.findAll = (req, res) => {
  Monster.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Monsters"
    })
  })
};

// Find a single Monster with an id
exports.findOne = (req, res) => {

}

// Update a Monster by the id in the request
exports.update = (req, res) => {

};

// Delete a Monster with the specified id in the request
exports.delete = (req, res) => {

};
