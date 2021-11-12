const sql = require("./db.js");

// constructor
const Flight = function( flight ) {
    this.id = flight. number;
    this.origin = flight.origin;
    this.destination = flight.destination;
    this.flightNumber = flight.flightNumber;
    this.depart = flight.depart;
    this.arrive = flight.arrive;
    this.nonstop = flight.nonstop;
};

Flight.create = (newFlight, result) => {
    sql.query("INSERT INTO flights SET ?", newFlight, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created flight: ", { id: res.insertId, ...newFlight });
        result(null, { id: res.insertId, ...newFlight });
    });
};

// Customer.findById = (customerId, result) => {
//     sql.query(`SELECT * FROM customers WHERE id = ${customerId}`, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//             return;
//         }
//
//         if (res.length) {
//             console.log("found customer: ", res[0]);
//             result(null, res[0]);
//             return;
//         }
//
//         // not found Customer with the id
//         result({ kind: "not_found" }, null);
//     });
// };

Flight.getAll = result => {
    sql.query("SELECT * FROM flights", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("flights: ", res);
        result(null, res);
    });
};

Flight.query = (origin, destination, result) => {

    console.log("origin: ", origin);
    console.log("destination: ", destination);

    sql.query(`SELECT * FROM flights WHERE origin = ? OR destination = ?`, [origin, destination], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found flight: ", res);
            result(null, res);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

// Customer.updateById = (id, customer, result) => {
//     sql.query(
//         "UPDATE customers SET email = ?, name = ?, active = ? WHERE id = ?",
//         [customer.email, customer.name, customer.active, id],
//         (err, res) => {
//             if (err) {
//                 console.log("error: ", err);
//                 result(null, err);
//                 return;
//             }
//
//             if (res.affectedRows == 0) {
//                 // not found Customer with the id
//                 result({ kind: "not_found" }, null);
//                 return;
//             }
//
//             console.log("updated customer: ", { id: id, ...customer });
//             result(null, { id: id, ...customer });
//         }
//     );
// };
//
// Customer.remove = (id, result) => {
//     sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }
//
//         if (res.affectedRows == 0) {
//             // not found Customer with the id
//             result({ kind: "not_found" }, null);
//             return;
//         }
//
//         console.log("deleted customer with id: ", id);
//         result(null, res);
//     });
// };
//
// Customer.removeAll = result => {
//     sql.query("DELETE FROM customers", (err, res) => {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//             return;
//         }
//
//         console.log(`deleted ${res.affectedRows} customers`);
//         result(null, res);
//     });
// };

Flight.getFlightOrigins = result => {
    sql.query("SELECT DISTINCT origin FROM flights", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("origins: ", res);
        result(null, res);
    });
};

Flight.getFlightDestinations  = result => {
    sql.query("SELECT DISTINCT destination FROM flights", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("destinations: ", res);
        result(null, res);
    });
};

module.exports = Flight;
