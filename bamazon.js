var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon"
});


connection.connect(function (err) {
  if (err) throw err;

});

connection.query("SELECT * FROM products", function (error, result) {

  for (var i = 0; i < result.length; i++) {
    console.log('Product ID: ' + result[i].id)
    console.log('Product Name: ' + result[i].product_name)
    console.log('Price, USD: $' + result[i].price)
    console.log('Stock Quantity: ' + result[i].stock_quantity)
    console.log('')
  }

  inquirer
    .prompt({
      name: "productId",
      type: "number",
      message: "What is the ID of the product you would like to buy?",
    })

    .then(function (answer) {
      connection.query(`SELECT * FROM products WHERE id = ${answer.productId}`, function (error, result) {
        console.log(result);

        inquirer
          .prompt({
            name: "quantity",
            type: "number",
            message: "How many would you like to buy?",
          })

          .then(function (answer) {
            if (answer.quantity <= result[0].stock_quantity) {
              console.log("Quantity in stock")
              var totalSpent = answer.quantity * result[0].price;
              var newQuantity = result[0].stock_quantity - answer.quantity;

              console.log("Stock update: " + newQuantity);
              console.log("Your purchase comes out to: $" + totalSpent)
            }

              // connection.query(`UPDATE * FROM products WHERE stock_quantity = ${newQuantity}`, function (error, result) {
              // make var name newQuanity that takes user disired qaunity and subtracts it from result [i].quanity
              // query the db and update quanity to the new quanity. UPDATE .. SET ... WHERE... 
              // Once complete with no error tell customer that they have made apurshcase

              // connection.end()
              // })

              else {
                console.log("There's not enough in stock. Please try again by running node bamazon.js")
                connection.end()
              }
            })
          })
      })
    });
