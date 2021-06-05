function Person() {
  this.name = 'Rocks'
  this.gender = 'M'
}

Person.prototype.age = 21

const rocks = new Person()
console.log(Person)
console.log('rocks: ', rocks)

const sarah = new Person()
sarah.name = 'Sarah'
sarah.gender = 'F'
sarah.test = 'test'
console.log('sarah: ', sarah)

console.log('sarah 2: ', sarah)
