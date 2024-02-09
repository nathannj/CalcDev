const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
module.exports = {
  addTest: async function () {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      const myDB = client.db("CalcDevCluster");
      const myColl = myDB.collection("test");
      const doc = { name: "Test 1", info: "This is a test" };
      const result = await myColl.insertOne(doc);

      if (result.acknowledged) {
        console.log("Add was successful go get it to see it!");
      } else {
        console.log("Add failed!");
      }
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  },
  getTest: async function () {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      const myDB = client.db("CalcDevCluster");
      const myColl = myDB.collection("test");
      const doc = { name: "Test 1" };
      var result = await myColl.findOne(doc);

      console.log("got back name: " + result.name + " and id: " + result._id);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();

      return result;
    }
  },
};
