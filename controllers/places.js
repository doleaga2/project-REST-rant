const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'Semicolon Cafe',
        city: 'New York',
        state: 'NY',
        cuisines: 'cafe, sandwiches',
        pic: '/images/semicoloncafe.jpg'
      }, {
        name: 'ViVi Bubble Tea',
        city: 'New York',
        state: 'NY',
        cuisines: 'bubble tea',
        pic: '/images/vivi-boba.jpg'
      }]
      res.render('places/index', { places })
 

  })
  
router.get('/new', (req, res) => {
  res.render('places/new')
  })

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
  })
module.exports = router

  