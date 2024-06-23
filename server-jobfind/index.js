const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
require("dotenv").config();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@job-finder-app.ffegsfs.mongodb.net/?retryWrites=true&w=majority&appName=job-finder-app`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create db
    const db = client.db("jobFinderApp");
    const jobCollections = db.collection("jobsApp");

    //get all jobs

    app.get("/all-jobs", async (req, res) => {
      const jobs = await jobCollections.find().toArray();
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//API
app.get("/", (req, res) => {
  res.send("hellow job finders");
});

//PORT
app.listen(port, () => {
  console.log("server is now running..............");
});
