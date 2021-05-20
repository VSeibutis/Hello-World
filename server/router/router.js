const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
const validateRecipe = require("../middle/validateRecipe")
const validateReview = require('../middle/validateReview')

router.post('/addrecipe',validateRecipe, controller.saveRecipe)
router.post('/makeReview',validateReview, controller.makeReview)
router.get('/getrecipes', controller.getRecipes)
router.get('/getfavorites', controller.getfavorites)
router.get('/singleRecipe/:id', controller.getSingleRecipe)
router.get('/favorite/:id', controller.favorite)


module.exports = router