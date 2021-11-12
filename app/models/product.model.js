const sql = require("./db.js");

// constructor
const Product = function(product) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.imageurl = product.imageurl;
};

Product.getAll = result => {
    sql.query("SELECT * FROM product", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("products: ", res);
        result(null, res);
    });
};

module.exports = Product;
