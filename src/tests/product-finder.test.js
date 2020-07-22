let getProduct = require("../product-finder.js")
let getProductsData = require("../product-provider.js")

jest.mock("../product-provider.js")

const product = require("../models/product.js")

function setUp() {
  getProductsData.mockImplementation(() => {
    let mockProduct = new product(
      "PL1000",
      "test-name",
      "test-dose",
      "test-substance",
      "test-url"
    )
    return { PL1000: mockProduct }
  })
}

describe("Product Finder Test", () => {
  beforeEach(() => {
    setUp()
  })

  afterEach(() => {})

  test("returns true when product exists", () => {
    let result = getProduct("PL1000")
    expect(result).toBeInstanceOf(product)
  })
  test("check if Product name matches", () => {
    let result = getProduct("PL1000").name
    let expected = "test-name"
    expect(result).toBe(expected)
  })
})
