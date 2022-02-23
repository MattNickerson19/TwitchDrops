import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

//GUID KEY 
// Efn84FSfwzxAA193

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

//------DROPS------

//Get all drops currently stored in the DB
app.get("/api/drops", async (req, res) => {
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser : true} );
        const db = client.db("pw_drops");

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

//Overwrite drops in the DB
app.post('/api/addDrops', async (req, res) => {
    try {
        if(req.query.id == 'Efn84FSfwzxAA193'){
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('twitchDrops');
    
            //delete all currently existing drops
            await db.collection("drops").remove({});
    
            //if a list of drops is being sent, add them all
            if(req.body.length > 0){
                for(let i = 0; i < req.body.length; i++){
                    await db.collection('drops').insertOne( 
                        {start_date:req.body[i].start_date,
                        end_date:req[i].end_date,
                        name:req[i].name,
                        drops:req[i].drops});
                }
            }
            //if only one drop is sent, then only add the one
            else{
                await db.collection('drops').insertOne( 
                    {start_date:req.body.start_date,
                    end_date:req.body.end_date,
                    name:req.body.name,
                    drops:req.body.drops});
            } 
            res.status(200).json({message: "Success"});
            client.close();
        }else{
            res.send('Invalid GUID key.');
        }   
    }
    catch( error) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

//Modify drop(s) in the DB
app.post('/api/modDrops', async (req, res) => {
    try {
        if(req.query.id == 'Efn84FSfwzxAA193'){
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('pw_drops');
    
            //if a list of drops is sent, modify them all
            if(req.body.length > 0){
                for(let i = 0; i < req.body.length; i++){
                    await db.collection('drops').updateOne(
                        {name:req.body[i].name},
                        {$set: {
                            start_date:req.body[i].start_date,
                            end_date:req.body[i].endDate,
                            drops:req.body[i].drops
                        }});
                }
            }else{
                await db.collection('drops').updateOne(
                    {name:req.body.name},
                    {$set: {
                        start_date:req.body.start_date,
                        end_date:req.body.end_date,
                        drops:req.body.drops
                    }});
            }
            
            res.status(200).json({message: "Success"});
            client.close();
        }else{
            res.send('Invalid GUID key.');
        }
    }     
    catch( error) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

//------FAQS------

//Get all faq currently stored in the DB
app.get("/api/faq", async (req, res) => {
    try{
        if(req.query.id == 'Efn84FSfwzxAA193'){
            const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser : true} );
            const db = client.db("pw_drops");

            const faqs = await db.collection("faq").find({}).toArray();
            res.status(200).json(faqs);
            client.close();
        }else{
            res.send('Invalid GUID key.');
        }
    }
    catch(error){
        res.status(500).json( {message: "Error connecting to db", error});
    }  
});

//Add new faq(s) to the DB
app.post('/api/addFAQ', async (req, res) => {
    try {
        if(req.query.id == 'Efn84FSfwzxAA193'){
            const client = await MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true});
            const db = client.db('pw_drops');

            //if a list of faq is being sent, add them all
            if(req.body.length > 0){
                for(let i = 0; i < req.body.length; i++){
                    await db.collection('faqs').insertOne( {question:req.body[i].question, 
                        answer:req.body[i].answer});
                }
            }
            //if only one faq is sent, then only add the one
            else{
                await db.collection('faq').insertOne( {question:req.body.question, 
                    answer:req.body.answer});
            } 
            res.status(200).json({message: "Success"});
            client.close();
        }else{
            res.send('Invalid GUID key.');
        }      
    }
    catch( error) {
        res.status(500).json( { message: "Error connecting to db", error});
    }
});

app.listen(8000, () => console.log("Listening on port 8000!"));