const getProfile = (req,res,next) => {
    console.log('get function called');
    return res.send("Get all profile");
}

module.exports = {
    getProfile
};