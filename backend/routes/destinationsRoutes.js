const express = require('express');
const router = express.Router();
const createDestination = require('../controllers/destinationsControlller/createDestination.js');
const deleteDestination = require('../controllers/destinationsControlller/deleteDestination.js');
const { showAllDestinations, showOneDestination } = require('../controllers/destinationsControlller/readDestination.js');
const updateDestination  = require('../controllers/destinationsControlller/updateDestination.js');
const authenticate = require('../middlewares/auth.js')

router.post('/create', createDestination);
router.delete('/:id', deleteDestination );
router.get('/', authenticate, showAllDestinations );
router.get('/:id', showOneDestination );
router.patch('/:id', updateDestination);



module.exports = router;