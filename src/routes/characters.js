const express = require ('express'); 
const {characters} = require ('../handlers'); // qd on ne spécifie pas le nom d'un fichier dans un dossier, on lit
//automatiquement le fichier index.js
const router = express.Router();

router.get('/', characters.listHandler);
router.post('/', characters.postHandler); 
router.delete('/', characters.deleteHandler);
router.put('/', characters.putHandler); 

module.exports = router // dans cette fois, possible d'un par fichier