module.exports = (sequelize, DataType) => {
  const Cuidador = sequelize.define(
    "Cuidador",
    {
      cuidador_id: {
        type: DataType.INTEGER,
        primaryKey: DataType.STRING,
        autoIncrement: true,
      },
      nome: DataType.STRING,
      genero: DataType.STRING,
      data_nascimento: DataType.DATE,
      cpf: DataType.STRING,
      fk_endereco: DataType.INTEGER,
    },
    { tableName: "cuidadores", timestamps: false }
  );

  return Cuidador;
};
