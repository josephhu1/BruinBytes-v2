const functions = require('firebase-functions')
const admin = require('firebase-admin')
//authenticate with firebase database
var serviceAccount = require("./ucla-dining-crud-api-firebase-adminsdk-he5en-56a50a6d44.json");
require('dotenv').config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)});

const express = require('express')
const app = express()
const db = admin.firestore() //database object
const cors = require('cors');
const { QuerySnapshot } = require('firebase-admin/firestore');
app.use ( cors( { origin:true } ) )

//Create - Post
app.post('/api/create', (req, res) => {
    (async () => {
        try{
            await db.collection('dining-halls').doc('/' + req.body.id + '/')
            .create({
                name: req.body.name,
                description: req.body.description,
                address: req.body.address,
                avg_rating: req.body.avg_rating
            })
            return res.status(200).send()
        }catch(error){
            console.log(error)
            return res.status(500).send(error)
        }
    })()
})

//Read - Get (Based on Restaurant ID)
app.get('/api/read/:id', (req, res) => {
    (async () => {
        try{
            const document  = db.collection('dining-halls').doc(req.params.id)
            let dining_hall = await document.get()
            let response = dining_hall.data()
            //send info about a dining hall
            return res.status(200).send(response)
        }catch(error){
            console.log(error)
            return res.status(500).send(error)
        }
    })()
})

//Read - Get (All Restaurants)
app.get('/api/read', (req, res) => {
    (async () => {
        try {
            let query = db.collection('dining-halls');
            let response = [];
            const querySnapshot = await query.get(); // Use `await` directly on the query
            const docs = querySnapshot.docs;

            for (let doc of docs) {
                const selectedItem = {
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    address: doc.data().address,
                    avg_rating: doc.data().avg_rating
                };
                response.push(selectedItem);
            }
            res.status(200).send(response); // Send response outside of the loop
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    })();
});

//Read - Get (All Restaurant Names ONLY)
app.get('/api/names', (req, res) => {
    (async () => {
        try {
            let query = db.collection('dining-halls');
            let response = [];
            const querySnapshot = await query.get(); // Use `await` directly on the query
            const docs = querySnapshot.docs;

            for (let doc of docs) {
                response.push(doc.data().name);
            }
            res.status(200).send(response); // Send response outside of the loop
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    })();
});

//Read - Get (All Restaurants)
app.get('/api/read', (req, res) => {
    (async () => {
        try {
            let query = db.collection('dining-halls');
            let response = [];
            const querySnapshot = await query.get(); // Use `await` directly on the query
            const docs = querySnapshot.docs;

            for (let doc of docs) {
                const selectedItem = {
                    id: doc.id,
                    name: doc.data().name,
                    description: doc.data().description,
                    address: doc.data().address,
                    avg_rating: doc.data().avg_rating
                };
                response.push(selectedItem);
            }
            res.status(200).send(response); // Send response outside of the loop
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    })();
});

//Update - Put
app.put('/api/update/:id', (req, res) => {
    (async () => {
        try{
            const document = db.collection('dining-halls').doc(req.params.id)

            await document.update({
                name: req.body.name,
                description: req.body.description,
                address: req.body.address,
                avg_rating: req.body.avg_rating
            })
            return res.status(200).send()
        }catch(error){
            console.log(error)
            return res.status(500).send(error)
        }
    })()
})

//Delete - Delete
app.delete('/api/delete/:id', (req, res) => {
    (async () => {
        try{
            const document = db.collection('dining-halls').doc(req.params.id)
            await document.delete()
            return res.status(200).send()
        }catch(error){
            console.log(error)
            return res.status(500).send(error)
        }
    })()
})

//Create - Post Restaurant Reviews for a Restaurant
//:id refers to a restaurant's id
app.post('/api/create/review/:id', (req, res) => {
    (async () => {
        try{
            // Get the dining hall information (you can put this logic in a separate function for better code organization)
            const diningHallDoc = db.collection('dining-halls').doc(req.params.id);
            const diningHall = await diningHallDoc.get();
            const diningHallData = diningHall.data();
            await db.collection('dining-reviews').doc('/' + req.body.id + '/')
            .create({
                restaurantID: diningHallDoc.id,
                restaurantName: diningHallData.name,
                username: req.body.username,
                rating: req.body.rating,
                review: req.body.review
            })

            if (diningHallData) {
                const restaurantName = diningHallData.name; // Replace 'name' with the actual field name
                return res.status(201).json({ message: `Review created for ${restaurantName}.` });
            } else {
                return res.status(404).json({ error: 'Dining hall not found' });
            }
        }catch(error){
            console.log(error)
            return res.status(500).send(error)
        }
    })()
})

//Search Restaurant name
app.get('/api/search', (req, res) => {
    (async () => {
        try {
            let query = db.collection('dining-halls');
            let response = [];
            const querySnapshot = await query.get(); // Use `await` directly on the query
            const docs = querySnapshot.docs;

            for (let doc of docs) {
                const selectedItem = {
                    id: doc.id,
                    name: doc.data().name,
                };
                response.push(selectedItem);
            }
            res.status(200).send(response); // Send response outside of the loop
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    })();
});



//Export the api to Firebase Cloud Functions
exports.app = functions.https.onRequest(app)