const express = require ('express');
const router = express.Router();

const customerController= require('../controllers/customerController');

router.get('/', customerController.list );
router.post('/add', customerController.guardar);
router.get('/delete/:id', customerController.eliminar);
router.get('/editar/:id', customerController.editar);
router.post('/editar/:id', customerController.nuevosdatos);

 
module.exports = router;