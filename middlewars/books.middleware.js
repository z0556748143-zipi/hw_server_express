import Joi from 'joi';


export const validateBook = (req, res, next) => {
    const schema = Joi.object({
        year: Joi.number().integer().min(1500).max(2026).required(),        
        price: Joi.number().min(0).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return next({ 
            status: 400, 
            type: 'validation error', 
            error: { message: error.details[0].message } 
        });
    }
    next();
};