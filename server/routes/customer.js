const express = require('express');
const customerController = require('../controllers/customerController')

const router = express.Router()
// Home
router.get('/', customerController.homePage);
router.post('/add', customerController.postCustomer)
router.get('/add', customerController.addCustomer);

router.get('/view/:id', customerController.view);
router.get('/edit/:id', customerController.edit);
router.put('/edit/:id', customerController.editPost);
router.delete('/edit/:id', customerController.deletCustomer);
router.post('/search', customerController.searchCustomers);




router.get('/about', customerController.about);














module.exports = router;