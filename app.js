const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

// console.log();

const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];
var workitems = ["Utkarsh", "Tushar"];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function (req, res) {
 let day = date.getDate();
res.render("list", { listTitle: day ,newListItem:items });
});
app.get("/about" , function(req, res){
  res.render("about");
})


app.post("/", function(req, res){
    var item = (req.body.newItem);
    // console.log(req.body);
    if(req.body.list ===" Work List"){
      workitems.push(item);
      res.redirect("/work");
    }else{
      items.push(item);
      res.redirect("/");
    }
});

 
app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItem: workitems});
})

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
