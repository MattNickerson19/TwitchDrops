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

        const drops = await db.collection("drops").find({}).toArray();
        res.status(200).json(drops);
        client.close();
    }
    catch(error){
        res.status(500).json( {message: "Error connecting to db", error});
    }
    
});

//Add new drop(s) to the DB
app.post('/api/addDrop', async (req, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
        const db = client.db('pw_drops');

        //if a list of drops is being sent, add them all
        if(req.body.length > 0){
            for(let i = 0; i < req.body.length; i++){
                await db.collection('drops').insertOne( {streamer_name:req.body[i].streamer_name, 
                    item_name:req.body[i].item_name, item_icon:req.body[i].item_icon, 
                    itemdefid:req.body[i].itemdefid, unlock_condition:req.body[i].unlock_condition});
            }
            //this single line would work as well, but it could possibly allow bad data in
            // await db.collection('drops').insertMany( req.body); 
        }
        //if only one drop is sent, then only add the one
        else{
            await db.collection('drops').insertOne( {streamer_name:req.body.streamer_name, 
                item_name:req.body.item_name, item_icon:req.body.item_icon, 
                itemdefid:req.body.itemdefid, unlock_condition:req.body.unlock_condition});
        } 
        res.status(200).json({message: "Success"});
        client.close();
    }
    catch( error) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

//Get all faq currently stored in the DB
app.get("/api/faq", async (req, res) => {
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser : true} );
        const db = client.db("pw_drops");

        const faqs = await db.collection("faq").find({}).toArray();
        res.status(200).json(faqs);
        client.close();
    }
    catch(error){
        res.status(500).json( {message: "Error connecting to db", error});
    }
    
});

//Add new faq(s) to the DB
app.post('/api/addFAQ', async (req, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
        const db = client.db('pw_drops');

        //if a list of faq is being sent, add them all
        if(req.body.length > 0){
            for(let i = 0; i < req.body.length; i++){
                await db.collection('faq').insertOne( {question:req.body[i].question, 
                    answer:req.body[i].answer});
            }
            //this single line would work as well, but it could possibly allow bad data in
            // await db.collection('faq').insertMany( req.body); 
        }
        //if only one faq is sent, then only add the one
        else{
            await db.collection('faq').insertOne( {question:req.body.question, 
                answer:req.body.answer});
        } 
        res.status(200).json({message: "Success"});
        client.close();
    }
    catch( error) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});




app.listen(8000, () => console.log("Listening on port 8000!"));