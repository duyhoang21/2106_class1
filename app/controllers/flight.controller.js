const Flight = require("../models/flight.model.js");

// Retrieve distinct Origins
exports.getOrigins = (req, res) => {
    Flight.getFlightOrigins((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving getFlightOrigins."
            });
        else res.send(data);
    });
};

// Retrieve distinct Destinations
exports.getDestinations = (req, res) => {
    Flight.getFlightDestinations((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving getFlightOrigins."
            });
        else res.send(data);
    });
};

// Create and Save a new Customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Flight
    const flight = new Flight({
        //id: req.body.number,
        origin: req.body.origin,
        destination: req.body.destination,
        flightNumber: req.body.flightNumber,
        depart: req.body.depart,
        arrive: req.body.arrive,
        nonstop: req.body.nonstop
    });

    console.log(flight);

    // Save Customer in the database
    Flight.create(flight, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Flight."
            });
        else res.send(data);
    });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
    Flight.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

// Find a single Flight with a destination
exports.query = (req, res) => {
    Flight.query(req.params.orig, req.params.dest, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Flight with origin ${req.params.orig} OR destination ${req.params.dest}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Flight with origin " + req.params.origin
                });
            }
        } else res.send(data);
    });
};

//
// // Find a single Customer with a customerId
// exports.findOne = (req, res) => {
//     Customer.findById(req.params.customerId, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found Customer with id ${req.params.customerId}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Error retrieving Customer with id " + req.params.customerId
//                 });
//             }
//         } else res.send(data);
//     });
// };
//
// // Update a Customer identified by the customerId in the request
// exports.update = (req, res) => {
// // Validate Request
//     if (!req.body) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//     }
//
//     Customer.updateById(
//         req.params.customerId,
//         new Customer(req.body),
//         (err, data) => {
//             if (err) {
//                 if (err.kind === "not_found") {
//                     res.status(404).send({
//                         message: `Not found Customer with id ${req.params.customerId}.`
//                     });
//                 } else {
//                     res.status(500).send({
//                         message: "Error updating Customer with id " + req.params.customerId
//                     });
//                 }
//             } else res.send(data);
//         }
//     );
// };
//
// // Delete a Customer with the specified customerId in the request
// exports.delete = (req, res) => {
//     Customer.remove(req.params.customerId, (err, data) => {
//         if (err) {
//             if (err.kind === "not_found") {
//                 res.status(404).send({
//                     message: `Not found Customer with id ${req.params.customerId}.`
//                 });
//             } else {
//                 res.status(500).send({
//                     message: "Could not delete Customer with id " + req.params.customerId
//                 });
//             }
//         } else res.send({ message: `Customer was deleted successfully!` });
//     });
// };
//
// // Delete all Customers from the database.
// exports.deleteAll = (req, res) => {
//     Customer.removeAll((err, data) => {
//         if (err)
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing all customers."
//             });
//         else res.send({ message: `All Customers were deleted successfully!` });
//     });
// };

