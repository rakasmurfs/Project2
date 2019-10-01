var db = require("../models");

module.exports = function(app) {
  app.post("/api/invoices", function(req, res) {
    db.Invoice.create({
      invoiceAmount: req.body.invoiceAmount,
      paidStatus: req.body.paidStatus,
      EmployerId: req.body.EmployerId
    }).then(function(results) {
      res.json(results);
    });
  });

  // Delete an example by id
  app.delete("/api/invoices/:id", function(req, res) {
    db.Invoice.destroy({ where: { id: req.params.id } }).then(function(
      results
    ) {
      res.json(results);
    });
  });

  app.put("/api/invoices", function(req, res) {
    db.Invoice.update(
      {
        paidStatus: true
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
