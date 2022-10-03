require('../db')

let PostModel = require('../models/Post.model')

PostModel.create({
    userId: '633a6cf96b37bbb8829bab2d',
    msg: 'My first blog post'
})
.then(() => {
    console.log('posts seeded')
})
.catch(() => {
    console.log('seeding failed')
})