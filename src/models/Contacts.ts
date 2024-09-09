import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../sequelize'; // Adjust path if necessary

interface ContactAttributes {
  id: number;
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

interface ContactCreationAttributes extends Optional<ContactAttributes, 'id'> {}

class Contact extends Model<ContactAttributes, ContactCreationAttributes>
  implements ContactAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public phone!: string;
  public topic!: string;
  public message!: string;
}

Contact.init({
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
    type: DataTypes.STRING,
    allowNull: false,
  },
  topic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'contacts',
});

export default Contact;
