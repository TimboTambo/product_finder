const product = require("./product.js")

describe("Product class test", () => {
  test("can be created", () => {
    let product1 = new product("plNumber", "name", "dose", "substance", "url")
    expect(product1.plNumber).toBe("plNumber")
  }),
    test("can be created", () => {
      console.log = jest.fn()
      let product1 = new product("plNumber", "name", "dose", "substance", "url")
      let expectedOutput = `
    PL Number: plNumber
    Name: name
    Dose: dose
    Substance: substance
    URL: url
    `
      product1.description()
      expect(console.log.mock.calls[0][0]).toBe(expectedOutput)
    })
})
