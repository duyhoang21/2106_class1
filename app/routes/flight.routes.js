module.exports = app => {
    const flights = require("../controllers/flight.controller.js");

    // Create a new Customer
    // app.post("/customers", customers.create);
    //
    // Retrieve all flights
    app.get("/flights", flights.findAll);

    // Retrieve flights by
    app.get("/flights/query/:orig/:dest", flights.query);

    // // Retrieve a single Customer with customerId
    // app.get("/customers/:customerId", customers.findOne);
    //
    // // Update a Customer with customerId
    // app.put("/customers/:customerId", customers.update);
    //
    // // Delete a Customer with customerId
    // app.delete("/customers/:customerId", customers.delete);
    //
    // // Create a new Customer
    // app.delete("/customers", customers.deleteAll);
    
    
    app.get("/flights/cities/origins", flights.getOrigins);
    app.get("/flights/cities/destinations", flights.getDestinations);

};
