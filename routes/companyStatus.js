const router = require("express").Router();

module.exports = (companyStatusService) => {
  router.get("/", companyStatusService.getCompanyStatuses);
  router.post("/", companyStatusService.postCompanyStatus);
  router.get("/:id", companyStatusService.getCompanyStatus);
  router.put("/:id", companyStatusService.putCompanyStatus);
  router.delete("/:id", companyStatusService.deleteCompanyStatus);
  return router;
};
