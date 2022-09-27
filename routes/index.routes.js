const router = require("express").Router();

const axios = require("axios");
let BBModel = require('../models/BB.model')

/* GET home page */
router.get("/", (req, res, next) => {
  BBModel.find()
    .then((characters) => {
      res.render("index", {characters});
    })
    .catch((err) => {
      next(err)
    })
});

router.get('/nasa', (req, res, next) => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=uTb6Va54aKS8UvNHElddPJ0doS4Jtm5mkPCcFQ2i')
    .then((response) => {
        res.render('nasa.hbs', {data: response.data})
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router;
