const { client } = require("../utils/dbconnect");

exports.storeTravelerDataService = async (data) => {
  const travelerData = client.db("miracleTraveler").collection("travelerData");

  try {
    const { insertedId } = await travelerData.insertOne(data);
    return insertedId;
  } catch (error) {
    return error;
  }
};

exports.getAllTravelerDataService = async () => {
  const travelerData = client.db("miracleTraveler").collection("travelerData");
  try {
    const allTraveler = await travelerData.find().toArray();
    return allTraveler;
  } catch (error) {
    return error;
  }
};

exports.getSpecificTravelerService = async (queeyOption) => {
  const travelerData = client.db("miracleTraveler").collection("travelerData");
  try {
    const specificTraveler = await travelerData.findOne(queeyOption);
    return specificTraveler;
  } catch (error) {
    return error;
  }
};
