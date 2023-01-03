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
  
  
module.exports = router

  