const Destination = require('../../models/Destination');

const createDestination = async(req,res) =>{
    try{
        const {name, country, rating, image, tags, description} = req.body;
        const newDestination = new Destination({name, country, rating, image, tags, description});
        await newDestination.save();
        res.status(201).json({message : "new destination created successfully" });
    }catch(err){
        res.status(400).json({error : err.message });
    }
}

module.exports = createDestination;