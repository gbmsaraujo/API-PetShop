module.exports = (sequelize, DataTypes) => {
  const Endereco = sequelize.define(
    "Endereco",
    {
      endereco_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      logradouro: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      complemento: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      estado: DataTypes.STRING,
    },
    { timestamps: false, tableName: "enderecos" }
  );

  return Endereco;
};
