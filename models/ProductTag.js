const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

//importing product model
const productModel = require("./Product");

//importing tag model
const tagModel = require("./Tag");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: { model: productModel, key: "id" },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: { model: tagModel, key: "id" },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
