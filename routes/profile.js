const router = require("express").Router();

module.exports = (profileService) => {
    router.get('/', profileService.getProfile);
    return router;
};