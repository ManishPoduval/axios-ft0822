require('../db')
const axios = require('axios')
const mongoose  = require('mongoose')

const BBModel = require('../models/BB.model')

axios.get('https://www.breakingbadapi.com/api/characters')
    .then((res) => {
        return BBModel.create(res.data)
    })
    .then(() => {
        console.log('Seed was a success!')
        mongoose.connection.close()
    })
    .catch((err) => {
        console.log('Seding failed', err)
        mongoose.connection.close()
    })
