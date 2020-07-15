let readline = require("readline")
const product = require("./models/product.js")
let rl = readline.createInterface(process.stdin, process.stdout)

let itemNames = ["PL123456", "PL513872", "PL999999", "PL654321", "PL818181"]

function isProductPresent(product) {
  return itemNames.includes(product)
}

function inputHandler(answer) {
  let result = isProductPresent(answer)
  if (result) {
    console.log("Product exists", answer)
  } else {
    console.log("Product doesn't exist", answer)
  }
}

rl.question("Input your medical licence number: ", inputHandler)

exports.isProductPresent = isProductPresent
