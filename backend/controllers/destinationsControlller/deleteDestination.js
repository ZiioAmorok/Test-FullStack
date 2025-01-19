const Destination = require('../../models/Destination');

const deleteDestination = async (req, res) => {
    try{
        const { id } = req.params;
        const destinationToDelete = await Destination.findByIdAndDelete(id);
        if (!destinationToDelete) {
            return res.status(404).json({ error: 'Destination not found' });
        }
        res.status(200).json({ message: 'Destination deleted successfully' });
    }catch(err){
        res.status(400).json({error: err.message});
        
    }
};

module.exports = deleteDestination;