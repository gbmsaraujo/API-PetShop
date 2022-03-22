module.exports = (sequelize, DataType) => {
  const Animal = sequelize.define(
    "Animal",
    {
      animal_id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome_animal: DataType.STRING,
      especie: DataType.STRING,
      raca: DataType.STRING,
      sexo: DataType.STRING,
      peso: DataType.STRING,
      fk_cuidador: DataType.INTEGER,
    },
    { tableName: "animais", timestamps: false }
  );

  return Animal;
};
