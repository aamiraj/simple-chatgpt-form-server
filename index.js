const express = require("express");
const app = express();
const cors = require("cors");
const travelerRouter = require("./routes/v1/traveler.route");
const { connect } = require("./utils/dbconnect");
require("dotenv").config();
const port = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());

// connect to the mongodb database
connect().catch(console.dir);

async function main() {
  // this route is for testing
  app.get("/", async (req, res) => {
    res.send("Route is working.");
  });

  //   this router is to store traveler data
  app.use("/api/v1/traveler", travelerRouter);
}

main().catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

module.exports = app;
