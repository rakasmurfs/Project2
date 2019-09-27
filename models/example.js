module.exports = function(sequelize, DataTypes) {
  var Employer = sequelize.define("employer", {
    employerName: DataTypes.STRING,
    employerEmail: DataTypes.STRING,
    invoiceAmount: DataTypes.DECIMAL,
    paidStatus: DataTypes.BOOLEAN
  });
  return Employer;
};
