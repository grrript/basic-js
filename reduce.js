const arr = [10, 20, 30]
const sum = arr.reduce((acc, item) => acc + item, 0)

console.log('sum: ', sum)

const arr2 = [3, 5, 7, 9]
// this more concise but more difficult to understand
const lookupTableV2 = arr2.reduce((acc, item) => ((acc[item] = item), acc), {})

// note: lookupTable and lookupTable1 are exactly the same.
// lookupTable1 is using the spread operator, the lookupTable is using the implicit return

// this version is easier to understand:
const lookupTable = arr2.reduce((acc, item) => {
  return {
    ...acc,
    [item]: item,
  }
}, {})

const reducer = (acc, item) => {
  return {
    ...acc,
    [item]: item,
  }
}
const lookupTableV3 = arr2.reduce(reducer, {})

console.log('lookupTableV2: ', lookupTableV2)
console.log('lookupTableV3: ', lookupTableV3)
console.log('lookupTable: ', lookupTable)
