import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';


const app = express();
app.use(bodyParser.json());


//Get all drops currently stored in the DB
app.get("/api/drops", async (req, res) => {
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser : true} );
        const db = client.db("pw_drops");

        const movies = await db.collection("drops").find({}).toArray();
        res.status(200).json(movies);
        client.close();
    }
    catch(error){
        res.status(500).json( {message: "Error connecting to db", error});
    }
    
});

app.listen(8000, () => console.log("Listening on port 8000!"));