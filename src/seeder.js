import mongoose from 'mongoose';
import colors from 'colors';

import connect from './db/db';
import users from './data/users';
import products from './data/products';
import User from './model/users';
import Product from './model/products';
import Order from './model/order';

const main = async () => {
  try {
    await connect();
    if (process.argv[2] === 'd') {
      await destroyData();
    } else {
      await importData();
    }
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
// Call the main function to start the script
main();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const isAdmin = createdUsers[0]._id;

    const sampleProducts = products.map((product) => ({
      ...product,
      user: isAdmin,
    }));

    await Product.insertMany(sampleProducts);

    console.log('Data Imported'.green.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed'.red.inverse);
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};
