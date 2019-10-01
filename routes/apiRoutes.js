var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/employers", function(req, res) {
    db.Employer.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new example
  app.post("/api/employers", function(req, res) {
    db.Employer.create({
      employerName: req.body.employerName,
      employerEmail: req.body.employerEmail,
      employerPhoneNumber: req.body.employerPhoneNumber
    }).then(function(results) {
      res.json(results);
    });
  });

  // Delete an example by id
  app.delete("/api/employers/:id", function(req, res) {
    db.Employer.destroy({ where: { id: req.params.id } }).then(function(
      results
    ) {
      res.json(results);
    });
  });
};
