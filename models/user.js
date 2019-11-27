module.exports = function(sequelize, DataTypes) {
  let user = sequelize.define("User", {
    email: {
      type: DataTypes.STRING(100),
      unique: true,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(30),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    addr_full: { 
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    addr_detail: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    zipcode: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    createdAt: { // 생성 시간
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: "user"
  });

  return user;
}