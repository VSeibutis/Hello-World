module.exports = (req, res, next) => {
    const {
        title,
        photos,
        ingredients,
        preparation
    } = req.body

    function errorSend(message) {
        res.send({success: false, message})
    }

    if(title.length > 100 || title.length < 10) {
        return errorSend('Title length is not valid')
    }

    if(ingredients.length < 1) {
        return errorSend('Ingredients must be included')
    }

    if(photos.length < 1) {
        return errorSend('Photos must be included')
    }

    if(preparation.length < 1) {
        return errorSend('Preparation must be included')
    }

    next()
}