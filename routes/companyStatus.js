const router = require("express").Router();

module.exports = (companyStatusService) => {
  router.get("/", companyStatusService.getCompanyStatuses);
  router.get("/:status", companyStatusService.gettActiveCompanyStatuses);
  router.post("/", companyStatusService.postCompanyStatus);
  router.get("/:id", companyStatusService.getCompanyStatus);
  router.put("/:id", companyStatusService.putCompanyStatus);
  router.delete("/:id", companyStatusService.deleteCompanyStatus);
  return router;
};
