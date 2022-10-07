module.exports = app => {
  const monsters = require("../controllers/monster.controller");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Create a new Monster
  // DECOMMENT:
  router.post("/", upload.single('file'), monsters.create);
  // router.post("/", monsters.create);

  // Retrieve all Monsters
  router.get("/", monsters.findAll);

  // Retrieve a single Monster with id
  router.get("/:id", monsters.findOne);

  // Update a Monster with id
  router.put("/:id", monsters.update);

  // Delete a Monster with id
  router.delete("/:id", monsters.delete);

  app.use("/api/monsters", router);
}