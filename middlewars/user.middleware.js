import Joi from 'joi';

export const validateUser = (req, res, next) => {
    // הכל בתוך הפונקציה - כולל הגדרת הסכמה
    const schema = Joi.object({
        idNumber: Joi.string().length(9).pattern(/^[0-9]+$/).required(),
        username: Joi.string().min(5).pattern(/^(?=.*[a-zA-Z])(?=.*\d).+$/).required()
    });

    // הבדיקה מול ה-req.body שנכנס לפונקציה
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
