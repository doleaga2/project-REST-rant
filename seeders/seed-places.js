// require models folder
const db = require('../models')
// mongoose creat method to create new place on app
db.Place.create([{
    name: 'Semicolon Cafe',
    city: 'New York',
    state: 'NY',
    cuisines: 'coffee, sandwiches',
    pic: '/images/semicoloncafe.jpg',
    founded: 2017
}, {
    name: 'ViVi Bubble Tea',
    city: 'New York',
    state: 'NY',
    cuisines: 'Bubble Tea',
    pic: '/images/vivi-boba.jpg',
    founded: 2007
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})

