var inquirer = require("inquirer");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "something",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  main();
});





function main(){

connection.query("SELECT * FROM products", function(err, results){
	 if (err) throw err;
   var choiceArray = [];
            for (var i = 0; i < results.length; i++) {

              choiceArray.push("product ID: "+results[i].item_id+ " name: "+ results[i].product_name +" price: " +results[i].price + " stock: "+
                results[i].stock_quantity);
            }
            console.log(choiceArray);

inquirer.prompt([
		{
		  name: "item",
      message: "what item would you like to by (ID)",	
		},
    {
      name: "amount",
      message: "how many would you like"
    }

	]).then(function (answer){
    for(var i = 0 ; results.length > i ; i++){
      if(answer.item == results[i].item_id){
         if (results[i].stock_quantity > parseInt(answer.amount)){
          var cost = answer.amount * results[i].price
          console.log("ok your total cost will be: " + cost);
                connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity: results[i].stock_quantity - answer.amount
              },
              {
                item_id: answer.item
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("order placed successfully!");
              main();
            }
          );
         } 
         else{
          console.log("sorry we dont have that many")
          main();
         }

    }
      }

  });

});
};