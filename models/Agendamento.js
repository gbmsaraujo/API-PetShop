module.exports = (sequelize, DataType) => {
  const Agendamento = sequelize.define(
    "Agendamento",
    {
      agendamento_id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fk_servico: DataType.INTEGER,
      fk_animal: DataType.INTEGER,
      horario: DataType.TIME,
      data_agendada: DataType.DATE
    },
    { tableName: "agendamentos", timestamps: false }
  );

  return Agendamento;
};
