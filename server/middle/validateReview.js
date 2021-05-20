const validator = require("email-validator");

module.exports = (req, res, next) => {
    const {email, review} = req.body

    const validEmail = validator.validate(email)
    if(!validEmail) {
        return res.send({success: false, message: "email is not valid"})
    }
    if(review.length > 500 || review.length < 10) {
        return res.send({success: false, message: "review text is wrong length"})
    }
    next()
}