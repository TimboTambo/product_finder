export default class Product {
  plNumber: string
  name: string
  dose: string
  substance: string

  url: string

  constructor(
    plNumber: string,
    name: string,
    dose: string,
    substance: string,
    url: string
  ) {
    this.plNumber = plNumber
    this.name = name
    this.dose = dose
    this.substance = substance
    this.url = url
  }

  toString(): string {
    return `
    PL Numberssss: ${this.plNumber}
    Name: ${this.name}
    Dose: ${this.dose}
    Substance: ${this.substance}
    URL: ${this.url}
    `
  }
}
