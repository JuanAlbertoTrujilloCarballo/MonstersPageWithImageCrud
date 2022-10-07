module.exports = (sequelize, Sequelize) => {
  const Monster = sequelize.define("monster", {
    name: {
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING
    },
    weakness: {
      type: Sequelize.STRING
    },
    filename: {
      type: Sequelize.STRING
    }
  });

  return Monster;
}