import mongoose from "mongoose";



const database = async () => {
    try{
    const conn = await mongoose.connect((process.env.DB))
    console.log('Connection successful')
    } catch (err){
        console.log('connection unsuccessful'+err)
        process.exit(1)
    }

}

export default database;