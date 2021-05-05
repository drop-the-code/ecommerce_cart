const { MongoClient } = require("mongodb");
require('dotenv').config();
// Mongo Connection
const dbClient = new MongoClient(process.env.DB_URI, { useUnifiedTopology: true });
async function connect() {
    try {
        await dbClient.connect();
        let db = await dbClient.db(process.env.DB_NAME);
        db.command({ ping: 1 });
        console.log("Connected successfully to mongo server");
        // Create index
        await db.collection("users").createIndex({ email: 1 });


    } catch (e) {
        console.error(e);
    }
}