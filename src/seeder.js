import mongoose from 'mongoose'
import colors from 'colors'
import connect from './db/db'
import users from './data/users'
import products from './data/products'
import User from "./model/users";
import Product from "./model/products";
import Order from "./model/order";

connect()
const importData = async () => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers  = await User.insertMany(users)

        const isAdmin = await createdUsers[0]._id

        const sampleProducts = products.map((product) => {
            return{...product, user: isAdmin }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported'.green.inverse)
        process.exit();


    }catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed'.red.inverse)
        process.exit();
    }catch(error) {
        console.error(`${error}.red.inverse`)
        process.exit(1)
    }

    };
    if (process.argv[2] ==='-d'){
        destroyData()
    }else {
        importData()
    }