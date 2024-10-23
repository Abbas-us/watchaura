import express from 'express';
import cors from 'cors';

import {MongoClient, ObjectId} from 'mongodb';
const mgurl = "mongodb+srv://abbas:abbas@cluster0.ila9o.mongodb.net/myDatabase?retryWrites=true&w=majority";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/products", async (req, res) => {
    const products = await ProductCollection.find().toArray()
    res.status(200).json(products)
})

let prodCollection;
let cartCollection;
async function connect(){
    const client  = new MongoClient("mongodb+srv://abbas:abbas@cluster0.ila9o.mongodb.net/myDatabase?retryWrites=true&w=majority");
    try{
        await client.connect();
        console.log("connected");
        const database = client.db("aura");
        prodCollection = database.collection("prodCollection");
        cartCollection = database.collection("cartCollection");
    }
    catch(e){
        console.log("error-", e)
    }


    app.get("/products-list", async (req, res) => {
        const products = await prodCollection.find().toArray()
        res.status(200).json(products)
        console.log(products);
        
    })

    app.post("/products-list", async (req, res) => {
        const newproduct = req.body;
        const result = await prodCollection.insertOne(newproduct);
        res.status(200).json(result);
    });

    app.get("/cart", async (req, res) => {
        const cartItems = await cartCollection.find().toArray();
        res.status(200).json(cartItems);
    });
    
    app.post("/cart", async (req, res) => {
        const cartItem = req.body;
        const result = await cartCollection.insertOne(cartItem);
        res.status(201).json(result);
    });
    
    app.put("/cart/:id", async (req, res) => {
        const { id } = req.params;
        const updatedCartItem = req.body;
        const result = await cartCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedCartItem }
        );
        res.status(200).json(result);
    });
    
    app.delete("/cart/:id", async (req, res) => {
        const { id } = req.params;
        const result = await cartCollection.deleteOne({ _id: new ObjectId(id) });
        res.status(200).json(result);
    });
    
    app.delete("/cart", async (req, res) => {
        const result = await cartCollection.deleteMany({});
        res.status(200).json(result);
    });
    

}
connect()

app.listen(5001,()=>{
    console.log("server started on 5001")
})

