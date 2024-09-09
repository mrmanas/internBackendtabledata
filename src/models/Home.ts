import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../sequelize"; // Ensure this file exports the sequelize instance

interface HomeAttributes {
  id: number;
  name: string;
  email: string;
  phone: string; // Changed from number to string
  message: string;
}

interface HomeCreationAttributes extends Optional<HomeAttributes, 'id'> {}

class Home extends Model<HomeAttributes, HomeCreationAttributes> implements HomeAttributes {
  id!: number;
  name!: string;
  email!: string;
  phone!: string; // Changed from number to string
  message!: string;
}

Home.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING, // Changed from DataTypes.INTEGER to DataTypes.STRING
    allowNull: true,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'GetInHome',
});

export default Home;
