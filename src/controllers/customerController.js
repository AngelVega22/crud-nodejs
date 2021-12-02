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

//otro metodo
controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM customer WHERE id = ?", [id], (err, rows) => {
      res.render("customer_edit", {
        data: rows[0],
      });
    });
  });
};
//otro metodo
controller.update = (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE customer set ? where id = ?",
      [newCustomer, id],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

//otro metodo
controller.delete = (req, res) => {
  /* console.log(req.params.id);
  res.send("works"); */

  const { id } = req.params;

  req.getConnection((err, conn) => {
    conn.query("DELETE FROM customer WHERE id = ?", [id], (err, rows) => {
      res.redirect("/");
    });
  });
};

module.exports = controller;
