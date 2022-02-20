import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';


const app = express();
app.use(bodyParser.json());

const parseAndLabelDropDate = (startString, endString) => {
    //parse the strings from db
    let startDropYear = parseInt(startString.slice(6));
    let startDropMonth = parseInt(startString.slice(3, 5).trim());
    let startDropDay = parseInt(startString.slice(0, 2).trim());
    let endDropYear = parseInt(endString.slice(6));
    let endDropMonth = parseInt(endString.slice(3, 5).trim());
    let endDropDay = parseInt(endString.slice(0, 2).trim());
 
    //drop month is decremented because it's zero-counted
    let startDate = new Date(startDropYear, (startDropMonth - 1), startDropDay);
    let endDate = new Date(endDropYear, (endDropMonth -1), endDropDay);
    let currentDate = new Date();

    //return a string for the drop_status value
    if(startDate < currentDate && endDate > currentDate){
      return "current";
    }else if(startDate < currentDate && endDate < currentDate){
      return "past";
    }else if(startDate > currentDate){
      return "future";
    }  
  }

//Get all drops currently stored in the DB
app.get("/api/drops", async (req, res) => {
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser : true} );
        const db = client.db("twitchDrops");

        const drops = await db.collection("drops").find({}).toArray();
        for(let drop of drops){
            drop.drop_status = parseAndLabelDropDate(drop.start_date, drop.end_date);
          }
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
        const db = client.db('twitchDrops');

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
        const db = client.db("twitchDrops");

        const faqs = await db.collection("faqs").find({}).toArray();
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
        const db = client.db('twitchDrops');

        //if a list of faq is being sent, add them all
        if(req.body.length > 0){
            for(let i = 0; i < req.body.length; i++){
                await db.collection('faqs').insertOne( {question:req.body[i].question, 
                    answer:req.body[i].answer});
            }
            //this single line would work as well, but it could possibly allow bad data in
            // await db.collection('faq').insertMany( req.body); 
        }
        //if only one faq is sent, then only add the one
        else{
            await db.collection('faqs').insertOne( {question:req.body.question, 
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