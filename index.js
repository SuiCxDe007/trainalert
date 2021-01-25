const express = require('express');
const Firestore = require('@google-cloud/firestore');

const db = new Firestore()
const app = express();
app.use(express.json());
const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log('Listning on ||| : ${port}');
});

app.get('/' , async (req,res)=>{
    res.json({status: 'Ready to roll bitches'})
})