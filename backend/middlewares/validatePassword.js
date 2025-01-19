const passwordSchema = require("../models/password.js");

const validatePassword = (req, res, next) => {
    const { password } = req.body;

    const isValid = passwordSchema.validate(password);
    if(!isValid) {
        const errors = passwordSchema.validate(password, { list: true });
        const errorMessages = {
        min: 'at least 6 characters',
        max: 'no more than 50 characters',
        uppercase: 'at least one uppercase letter',
        lowercase: 'at least one lowercase letter',
        digits: 'at least two digits',
        spaces: 'no spaces',
        }

        return res.status(400).json({
            message: `Password must include: ${errors.map(rule => errorMessages[rule]).join(', ')}`
        });
    }

    next()
};

module.exports = validatePassword;