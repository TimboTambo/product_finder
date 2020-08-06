import ProductFinder from "./services/finder"
import getInput from "./app"
import getData from "./repositories/data-provider"

function startUp() {
  let finder = new ProductFinder(getData)
  getInput(finder)
}

startUp()
