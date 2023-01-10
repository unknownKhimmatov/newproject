const mongoose = require("mongoose");
const urlDB = "mongodb+srv://firdavsbackend:firdavsbackend2023@firdavsglobalbackend.cmtuqdr.mongodb.net/?retryWrites=true&w=majority";
const connect = async () => {
  try {
    const connectDB = await mongoose.connect(urlDB, {
      useNewUrlParser: true,
    });
    console.log("Mongodb connect", connectDB.connection.host);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connect;