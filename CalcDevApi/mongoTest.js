const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://njackson840:gsHpDhZmQSjtMlZU@calcdevcluster.sh9gwuf.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function Addtest() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const myDB = client.db("CalcDevCluster");
    const myColl = myDB.collection("test");
    const doc = { name: "Test 1", info: "This is a test" };
    const result = await myColl.insertOne(doc);
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);