

var inquirer = require("inquirer");
var fs = require("fs");
var badge;
inquirer
  .prompt([
    {
      type: "input",
      message: "Name:",
      name: "name"
    },
    {
      type: "input",
      message: "Bio:",
      name: "bio"
    },
    {
      type: "input",
      message: "Location:",
      name: "location"
    },
    {
      type: "input",
      message: "Github URL:",
      name: "ghURL"
    },
    {
        type: "input",
        message: "LinkedIN:",
        name: "liURL"
    },

  ])
  .then(function(response) {
    
      var writeStream = fs.createWriteStream('index.html');
      writeStream.write("\n<!DOCTYPE html>");
      writeStream.write("\n<html lang='en'>");
      writeStream.write("\n<head>");
      writeStream.write("\n<meta charset='UTF-8'>");
      writeStream.write("\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
      writeStream.write("\n<title>Document</title>");
      writeStream.write("\n</head>");
      writeStream.write("\n<body>");
      writeStream.write("\n<h1 style='color:red'>Name:"+response.name+"<h1>"),
      writeStream.write("\n<h1 style='color:orange'>Bio:"+response.bio+"<h1>"),
      writeStream.write("\n<h1 style='color:yellow'>Location:"+response.location+"<h1>"),
      writeStream.write("\n<h1 style='color:green'>My Github:"+response.ghURL+"<h1>"),
      writeStream.write("\n<h1 style='color:blue'>My LinkedIn:"+response.liUrl+"<h1>"),
      writeStream.write("\n</body>");
      writeStream.end();
      
  });
