const client = new MongoClient(uri);
const dataBaseName = "recipe_site";

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`Connected to the ${dataBaseName} database`);
    } catch (err) {
        console.error(`Error connecting to the database: ${err}`);
    }
};

const uri = require("./atlas_uri");