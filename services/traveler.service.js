const { client } = require("../utils/dbconnect");

exports.storeTravelerDataService = async (data) => {
  const travelerData = client.db("miracleTraveler").collection("travelerData");

  const { insertedId } = await travelerData.insertOne(data);
  return insertedId;
};

exports.getAllTravelerDataService = async () => {
  const travelerData = client.db("miracleTraveler").collection("travelerData");
  const allTraveler = await travelerData.find().toArray();
  return allTraveler;
};

exports.getSpecificTravelerService = async (queeyOption)=>{
    const travelerData = client.db("miracleTraveler").collection("travelerData");
    const specificTraveler = await travelerData.findOne(queeyOption)
    return specificTraveler

}