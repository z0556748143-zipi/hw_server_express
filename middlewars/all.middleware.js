export const addDate = (req, res, next) => {
    req.currentData = new Date();
    next();
};