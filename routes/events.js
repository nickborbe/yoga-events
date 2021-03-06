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



router.post('/new-event', (req, res, next)=>{
    Event.create(req.body)
    .then((newEvent)=>{
        res.json({message: 'Successfully Created Event', event: newEvent})
    })
    .catch((err)=>{
        res.json(err.messageg)
    })
})

router.post('/edit/events/:id', (req, res, next)=>{
    Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((newInfo)=>{
        res.json({message: 'event succesfully updated', event: newInfo})
    })
    .catch((err)=>{
        res.json(err.messageg)
    })
})

router.delete('/remove/event/:id', (req, res, next)=>{
    Event.findByIdAndRemove(req.params.id)
    .then((goneEvent)=>{
        res.json({message: 'event successfully deleted', event: goneEvent})
    })
    .catch((err)=>{
        res.json(err.messageg)
    })
})

module.exports = router;
