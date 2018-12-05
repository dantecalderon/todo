const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
	res.render('index')
})

router.post('/add', (req, res) => {
  console.log(req.body)
  res.send('add')
})

module.exports = router
