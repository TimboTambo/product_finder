let ProductFinder = require("./services/finder.js")
let getInput = require("./app.js")
let getData = require("./repositories/data-provider.js")

function startUp() {
  let finder = new ProductFinder(getData)
  getInput(finder)
}

startUp()
