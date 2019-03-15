var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "smgpassword",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  items();
});

function items() {
    console.log("Amazon salesplace Items...\n");
    connection.query("SELECT * FROM products", function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + "| Dept: " + res[i].department_name + " | $" + res[i].price + " | QTY: " + res[i].stock);
      }
      console.log("-----------------------------------");
      choooseProduct();
    });
  }

function choooseProduct() {
connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;

      inquirer.prompt([
          {
            name: "choice",
            type: "rawlist",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < res.length; i++) {
                choiceArray.push(res[i].product_name);
              }
              return choiceArray;
            },
            message: "Which item would you like to buy?"
          },
          {
            name: "Quantity",
            type: "input",
            message: "How many Units?"
          }

]).then(function(answer) {
        var chosenItem = "";
        for (var i = 0; i < res.length; i++) {
            if (res[i].product_name === answer.choice) {
              chosenItem = res.product_name;
        }
            console.log(chosenItem);
        }

  
          if (chosenItem.stock < parseInt(answer.stock)) {
                 answer.stock -= chosenItem.stock
            connection.query("UPDATE products SET ? WHERE ?",[
                {
                  stock: answer.stock
                },
                {
                  id: chosenItem.id
                }
              ],
              function(error) {
                if (error) throw err;
                console.log("Enjoy your " + chosenItem + "!");
                items();
              }
            );
          }
          else {
            console.log("Sorry Not enough Stock... Item is backordered");
            items();
          }
        });
    });
  }
  