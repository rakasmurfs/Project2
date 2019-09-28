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
      employerName: req.body.employer_name,
      employerEmail: req.body.employer_email,
      invoiceAmount: req.body.invoiceAmount,
      paidStatus: red.body.paidStatus
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

  app.put("/api/employers/", function(req, res) {
    db.Employer.update(
      {
        paidStatus: req.body.paidStatus
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(results) {
      res.json(results);
    });
  });
};
