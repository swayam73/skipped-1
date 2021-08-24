const router = require("express").Router();

module.exports = (travelOptionsService) => {
  router.get("/", travelOptionsService.getTravelOptions);
  router.post("/", travelOptionsService.postTravelOption);
  router.get("/:id", travelOptionsService.getTravelOption);
  router.put("/:id", travelOptionsService.putTravelOption);
  router.delete("/:id", travelOptionsService.deleteTravelOption);
  return router;
};
