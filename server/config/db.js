const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectToDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Database is connected Successfully ! ${connect.connection.host}`);
        connect
    } catch (error) {
        console.log('Database falied connection!',error);
        
    }
}



module.exports = connectToDb