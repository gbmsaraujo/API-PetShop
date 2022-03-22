module.exports = (sequelize, DataTypes) => {
  const Servico = sequelize.define(
    "Servico",
    {
      servico_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      servico: DataTypes.STRING
      
    },
    { tableName: "servicos", timestamps: false }
  );

  return Servico;
};
