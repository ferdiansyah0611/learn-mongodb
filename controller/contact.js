var Contact = require("../model/Contact.js");

var Outed = {}
 
Outed.getContact = async (req, res) => {
    try {
        const response = await Contact.find();
        res.json(response);
    } catch ({message}) {
        res.status(500).json({message: message});
    }
}
 
Outed.getContactById = async (req, res) => {
    try {
        const response = await Contact.findById(req.params.id);
        res.json(response);
    } catch ({message}) {
        res.status(404).json({message: message});
    }
}
 
Outed.saveContact = async (req, res) => {
    const response = new Contact(req.body);
    try {
        const saved = await response.save();
        res.redirect('/')
    } catch ({message}) {
        res.status(400).json({message: message});
    }
}
 
Outed.updateContact = async (req, res) => {
    const isID = await Contact.findById(req.params.id);
    if(!isID) return res.status(404).json({message: "Data is not found"}); 
    try {
        const response = await Contact.updateOne({_id: req.params.id}, {$set: req.body});
        res.redirect('/')
    } catch ({message}) {
        res.status(400).json({message: message});
    }
}
 
Outed.deleteContact = async (req, res) => {
    const isID = await Contact.findById(req.params.id);
    if(!isID) return res.status(404).json({message: "Data is not found"});
    try {
        const response = await Contact.deleteOne({_id: req.params.id});
        res.redirect('/')
    } catch ({message}) {
        res.status(400).json({message: message})
    }
}

module.exports = Outed