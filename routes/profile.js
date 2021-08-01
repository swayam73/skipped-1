const router = require("express").Router();

module.exports = (profileService) => {
    router.get('/', profileService.getProfiles);
    router.post('/', profileService.postProfile);
    router.get('/:id', profileService.getProfile);
    router.put('/:id', profileService.putProfile);
    router.delete('/:id', profileService.deleteProfile);
    return router;
};