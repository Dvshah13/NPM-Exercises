var marked = require('marked');
var fs = require('fs');
var lodash = require('lodash');

// Ex1
// console.log(marked("Hello World!"));

// Ex2
// var inputFile = process.argv[2];
// var outputFile = process.argv[3];
//
// fs.readFile(inputFile, function(err, content) {
//     if (err) {
//         console.log("Sorry this is not a proper file: ");
//         console.log(err.message);
//     }
//     var fileContent = content.toString()
//     fileContent = marked(fileContent);
//     fs.writeFile(outputFile, fileContent, function(err) {
//         if (err) {
//             console.log("Sorry this is not a proper file: ");
//             console.log(err.message);
//         }
//     });
// });

// Ex3
// let card = ["(ace, diamond)", "(two, spades)", "(jack, hearts)", "(queen, heart)", "(king, clubs)"]
// let shuffledCard = lodash.shuffle(card)
// console.log("My cards: " + card);
// console.log("Shuffled cards: " + shuffledCard);
