import mongoose from "mongoose";
const { MONGO_URI } = process.env
console.log(process.env, 'the mongo uri ============================>')
function connect() {
    mongoose.connect(`${MONGO_URI}`,{}).then(() => {
        console.log('connected to the database')
    })
.catch((error) => {
    console.log('database connection failed');
    console.error(error.message)
    process.exit(1)
})
}
export default connect