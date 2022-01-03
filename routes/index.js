var express = require('express');
var Contact = require("../model/Contact.js");

const router = express.Router();

router.get('/', async(req, res) => {
	try{
		const data = await Contact.find()
		res.render('index', {
			title: 'hello world',
			contact: data
		})
	}catch(e){
		res.send('error')
	}
})

module.exports = router;
