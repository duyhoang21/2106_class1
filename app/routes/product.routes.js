module.exports = app => {
    const customers = require("../controllers/product.controller.js");

    // Create a new Customer
    //app.post("/product", customers.create);

    // Retrieve all Customers
    app.get("/products", customers.findAll);

};
