export const addDate = (req, res, next) => {
    req.currentData = new Date();
    next();
};
export const newDate = (req, res, next) => {
    console.log(req.currentData);
    next();
}


export const validate = (schema) => {
    return (req, res, next) => {
        // בודקים את הבקשה מול הסכמה ששלחנו לה
        const { error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            // אוספים את כל השגיאות למערך אחד
            const messages = error.details.map(err => err.message);
            return next({ status: 400, type: 'validation error', error: { message: messages } });
        }
        next();
    };
};