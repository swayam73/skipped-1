const router = require("express").Router();

module.exports = (matchScoreService) => {
  router.get("/", matchScoreService.getMatchScores);
  router.post("/", matchScoreService.postMatchScore);
  router.get("/:id", matchScoreService.getMatchScore);
  router.put("/:id", matchScoreService.putMatchScore);
  router.delete("/:id", matchScoreService.deleteMatchScore);
  return router;
};
