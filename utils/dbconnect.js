require("dotenv").config();
const { MongoClient } = require("mongodb");

// Replace the following with your Atlas connection string
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`;
// Connect to your Atlas cluster
const client = new MongoClient(url);

const connect = async () => {
  try {
    await client.connect();
    console.log("Successfully connected to Atlas");
  } catch (err) {
    console.log(err.stack);
  } finally {
    //await client.close();
  }
};

module.exports = { connect, client };
