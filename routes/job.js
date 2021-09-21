const router = require("express").Router();
const getProfile = require("../middlewares/getProfile");

module.exports = (jobService) => {
  router.get("/", getProfile, jobService.getJobs);
  router.get("/active", getProfile, jobService.getActiveJobs);
  router.post("/", getProfile, jobService.postJob);
  router.get("/:id", getProfile, jobService.getJob);
  router.put("/:id", getProfile, jobService.putJob);
  router.delete("/:id", getProfile, jobService.deleteJob);
  return router;
};
