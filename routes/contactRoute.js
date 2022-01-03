var {
	getContact, 
    saveContact, 
    getContactById, 
    updateContact,
    deleteContact
} = require("../controller/contact.js");
var express = require('express');
const router = express.Router();

router.get('/', getContact);
router.get('/:id', getContactById);
router.post('/', saveContact);
router.patch('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;
