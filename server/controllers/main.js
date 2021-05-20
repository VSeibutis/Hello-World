const recipeDb = require('../schemas/recipeSchema')

module.exports = {
    saveRecipe: (req, res) => {
        const {
            title,
            photos,
            ingredients,
            preparation
        } = req.body

        const recipe = new recipeDb()
        recipe.title = title
        recipe.photos = photos
        recipe.ingredients = ingredients
        recipe.preparation = preparation
        recipe.favorite = false
        recipe.reviews = []

        recipe.save().then(data => {
            res.send({success: true})
        })
    },
    getRecipes: async (req, res) => {
        const recipes = await recipeDb.find()
        res.send({success: true, recipes})
    },
    getfavorites: async (req, res) => {
        const recipes = await recipeDb.find({favorite: true})
        res.send({success: true, recipes})
    },
    getSingleRecipe: async (req, res) => {
        const recipe = await recipeDb.findOne({_id: req.params.id})
        res.send({success: true, recipe})
    },
    makeReview: async (req, res) => {
        const {id, email, points, review} = req.body
        const rew = {
            email,
            points,
            review
        }
        const updated = await recipeDb.findOneAndUpdate({_id: id}, {$push: {reviews: rew}}, {new: true})
        res.send({success: true, recipe: updated})
    },
    favorite: async (req, res) => {
        const {id} = req.params
        const recipe = await recipeDb.findOne({_id: id})
        const updated = await recipeDb.findOneAndUpdate({_id: id}, {$set: {favorite: !recipe.favorite}}, {new: true})
        res.send({success: true, recipe: updated})
    }
}