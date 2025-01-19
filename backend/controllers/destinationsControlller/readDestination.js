const Destination = require('../../models/Destination');

const showAllDestinations = async (req,res) => {
    try{
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    }catch(err){
        res.status(500).json({error: err.message})
    }
};

const showOneDestination = async (req,res) => {
    const { id } = req.params;
    try{
        const destinations = await Destination.findById(id);
        if(!destinations){
            return res.status(500).json({error:'Destination not found' })
        }
        res.status(200).json(destinations)
    }catch(err){
        res.status(404).json({error: err.message})
    }
};

module.exports = { showAllDestinations, showOneDestination }

