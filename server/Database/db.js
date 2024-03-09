const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://vy80032:password@cluster0.h0i9whn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/";

const connect = async () => {
  try {
    await mongoose.connect(mongoURI, { dbName: "foodapp" });
    console.log("Connected to MongoDB");

    let fetched_data = mongoose.connection.db.collection("foodCategory");
    let data = await fetched_data.find({}).toArray(); // Use await here to wait for the data
    let item_data = mongoose.connection.db.collection("food_items");
    let food_items_data = await item_data.find({}).toArray();
    global.foodCategory = data;
    global.food_items_data = food_items_data;
    // console.log(data);
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
  }
};
module.exports = connect;
