const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)


// module.exports = [{
//     name: 'Semicolon Cafe',
//     city: 'New York',
//     state: 'NY',
//     cuisines: 'coffee, sandwiches',
//     pic: '/images/semicoloncafe.jpg'
//   }, {
//     name: 'ViVi Bubble Tea',
//     city: 'New York',
//     state: 'NY',
//     cuisines: 'bubble tea',
//     pic: '/images/vivi-boba.jpg'
//   }]
