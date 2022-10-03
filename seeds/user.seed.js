require('../db')

let UserModel = require('../models/User.model')

UserModel.create([
    {
        name: 'Ansh',
        email: 'a@gmail.com',
        phone: '2936478234'
    },
    {
        name: 'Mohammed',
        email: 'm@gmail.com',
        phone: '978324234'
    },
    {
        name: 'Levi',
        email: 'l@gmail.com',
        phone: '346455234'
    }
])
.then(() => {
    console.log('users seeded')
})
.catch(() => {
    console.log('seeding failed')
})