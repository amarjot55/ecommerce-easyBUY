const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const addUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to DB');

    const newUser = {
      name: "Amarjot Singh",
      email: "sagguamarjot@gmail.com",
      password: '12345678',
      isVerified: true,
      isAdmin: false,
    };

    const user = new User(newUser);
    await user.save();
    console.log('User added successfully');
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

addUser();
