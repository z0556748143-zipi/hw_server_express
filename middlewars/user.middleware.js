import Joi from 'joi';

export const validateUser = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),

        email: Joi.string().email().required(), 
        
        phone: Joi.string().pattern(/^0[2-9]\d{7,8}$/).required(), 
        
        password: Joi.string().min(4).required()
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


