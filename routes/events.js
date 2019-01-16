const express = require('express');
const router  = express.Router();
const Event  = require('../models/Event');

/* GET home page */
router.get('/events', (req, res, next) => {
    Event.find()
    .then((allTheEvents)=>{
        res.json(allTheEvents)
    })
    .catch((err)=>{
        res.json(err.message);
    })
});




router.get('/events/:id', (req, res, next)=>{
    Event.findById(req.params.id)
    .then((theEvent)=>{
        res.json(theEvent)
    })
    .catch((err)=>{
        res.json(err.message);
    })


})


module.exports = router;
