// const mirror = (input: string): string => {
//   return input
// }

// const lengthOfArray = (array: number[]): number => {
//   return array.length
// }

interface ThingWithName {
  name: string
}

interface ThingWithAge {
  age: number
}

const returnAnimalName = (animal: Animal): string => {
  return animal.name
}

const returnInsectName = (insect: Insect): string => {
  return insect.name
}

const returnName = (thing: Animal): string => {
  return thing.name
}

const addAges = (thing1: ThingWithAge, thing2: ThingWithAge) {
  return thing1.age + thing2.age
}



class Animal implements ThingWithName {
  name: string
  age: number
  height: number
  private width: number

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  makeNoise(): string {
    return "Woof - I am this wide: " + this.width
  }
}

class Insect {
  name: string
  readonly age: number
  height: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  makeNoise(): string {
    return "Click"
  }
}

let elephant = new Animal("Nelly", 50)
let elephantName = returnAnimalName(elephant)
console.log(elephantName)

let lion = new Animal("Simba", 4)
let lionName = returnName(lion)
console.log(lionName)

let beetle = new Insect("Ringo", 1)
beetle.age = 12
beetle.height
beetle.makeNoise()
let beetleName = returnName(beetle)
console.log(beetleName)
