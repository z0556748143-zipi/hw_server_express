export const addDate = (req, res, next) => {
    req.currentData = new Date();
    next();
};
export const newDate = (req, res, next) => {
    console.log(req.currentData);
    next();
}
