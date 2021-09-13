const router = require("express").Router();
const getProfile = require("../middlewares/getProfile");

module.exports = (profileService) => {
  router.get("/find", getProfile, profileService.findProfiles);
  router.get("/:id", profileService.getProfileById);
  router.get("/", profileService.getProfiles);
  router.post("/", profileService.postProfile);
  router.get("/:id", profileService.getProfile);
  router.put("/:id", profileService.putProfile);
  router.delete("/:id", profileService.deleteProfile);
  return router;
};
