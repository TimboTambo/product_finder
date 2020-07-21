const { getProduct } = require("../index.js")
const product = require("../models/product.js")

describe("Input handler", () => {
  test("returns true when product exists", () => {
    expect(getProduct("PL123456")).toBeInstanceOf(product)
  })
  // test("returns false when product doesn't exist", () => {
  //   expect(isProductPresent("PL123465")).toBe(false)
  // })
})
