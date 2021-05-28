arr = ['Rocks', 'David', 'Gary']

const newItem = 'Almar'

arr.splice(1, 0, newItem)
console.log('arr: ', arr)

const newArr = [...arr]
console.log('newArr: ', newArr)
