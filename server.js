const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Acronym = require('./models/model')

app.use(express.json())

//routes

//get
app.get('/acronym', async(req,res) => {
    const {page, limit} = req.query || 0
    const skip = (page-1)*10 
    try{
        const acronym = await Acronym.find({}).skip(skip).limit(limit);
        res.status(200).json(acronym)

     } catch (error) {
         console.log(error.message);
         res.status(500).json({message: error.message})
     }
 });

 //update
app.put('/acronym/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const acronym = await Acronym.findByIdAndUpdate(id, req.body);
        if(!acronym){
            return res.status(404).json({message: 'invalid acronym ID'})
        }
        const updatedAcronym = await Acronym.findById(id)
        res.status(200).json(updatedAcronym)
    } catch (error) {
         console.log(error.message);
         res.status(500).json({message: error.message})
    };
});

//delete
app.delete('/acronym/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const acronym = await Acronym.findByIdAndDelete(id, req.body);
        if(!acronym){
            return res.status(404).json({message: 'invalid acronym ID'})
        }
        res.status(200).json(acronym)

    } catch (error) {
         console.log(error.message);
         res.status(500).json({message: error.message})
    };
});

 //post
app.post('/acronym', async(req,res) => {
    try{
       const acronym = await Acronym.create(req.body)
       res.status(200).json(acronym);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})


mongoose.
connect('mongodb+srv://narennemi:narendb1@narendb.gkvcs0f.mongodb.net/Fullhaustest?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
        console.log('server is running on port 3000')
    })
}).catch((error) => {
       console.log(error)
})

