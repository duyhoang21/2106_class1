module.exports = app => {
    const shoppingCart = require("../controllers/shoppingcart.controller.js");

    // Create a new Customer
    app.post("/shopping-cart", shoppingCart.create);

    // Retrieve all Customers
    //app.get("/products", customers.findAll);

};
