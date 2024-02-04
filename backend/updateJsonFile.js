import { MongoClient } from 'mongodb';
import fs from "fs";

const mongoURI = 'mongodb+srv://mlcproj:rtc123@cluster0.7vunbar.mongodb.net/pdf-collection?retryWrites=true&w=majority';
const dbName = 'pdf-collection';
const collectionName = 'PdfDetails';
const jsonFilePath = 'mls-website\client\src\components\mockData.json';

async function updateJsonFile() {
  const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

  
    
      try {
        await client.connect();
        console.log('Connected to MongoDB');
    
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
    
        // Wait for the client to be connected before creating the change stream
        const changeStream = collection.watch();
    
        changeStream.on('change', async () => {
          // Fetch the updated data from MongoDB
          const newData = await collection.find().toArray();
    
          // Update the JSON file
          fs.writeFileSync(jsonFilePath, JSON.stringify(newData, null, 2));
    
          console.log('JSON file updated');
        });
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
   updateJsonFile();
 