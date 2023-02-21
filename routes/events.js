const express = require('express')
const router = express.Router()

router.get('/impact/:level', (req, res) => {
    const level = req.params.level
    if (level === 'high') {

    } else if (level === 'medium') {

    } else {

    }
    return res.status(200).json
})

router.get('time/:startDay/:endDay', (req, res) => {
    const { start, end } = req.params
    if (!start) {
        return res.status(200).json({ success: true, events: ['Please provide a start day']})
    }
    
})

router.get('/query', (req, res) => {
    const { impact, time } = req.query

})

module.exports = router