const express = require ('express'); 
const {countries} = require ('../handlers'); 
const router = express.Router();

router.get('/', countries.listHandler); 
router.post('/', countries.postHandler); 
router.delete('/', countries.deleteHandler);
router.put('/', countries.putHandler); 

module.exports = router;
