const sql = require("./db.js");

// constructor
const ShoppingCart = function( cart ) {
    this.key = cart.key;
    this.created_at = cart.created_at;
};

ShoppingCart.create = (sc, result) => {
    sql.query("INSERT INTO shopping_cart(created_at) VALUES (NOW())", sc, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created shopping: ", { id: res.key, ... sc });
        result(null, { id: res.key, ... sc});
    });
};

module.exports = ShoppingCart;
