const Destination = require('../../models/Destination');

const updateDestination = async(req,res) => {
    const { id } = req.params;
    const {name, description} = req.body;
    try{
       const updateDestination = await Destination.findByIdAndUpdate(id, {name,description}, {new: true, runValidators: true });

       if(!updateDestination){
            return res.status(404).json({error: 'Destination not found' });
       }
       res.status(200).json(updateDestination);
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

module.exports = updateDestination;