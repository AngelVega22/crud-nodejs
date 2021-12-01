const controller = {};

//list es el metodo que esta en customers.js
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer", (err, customers) => {
      if (err) {
        res.json(err);
      }
      //console.log(customers);
      res.render("customers", {
        data: customers,
      });
    });
  });
};
//otro metodo
controller.save = (req, res) => {
  // console.log(req.body);
  // res.send("funciona");

  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO customer set ?", [data], (err, customer) => {
      //console.log(customer);
      //res.send("funciona");
      res.redirect("/");
    });
  });
};

module.exports = controller;
