const capitalize = (text) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof text !== 'string') {
      return reject(new Error('Argument must be of type string.'))
    }
    const capString = text[0].toUpperCase() + text.substr(1)
    return resolve(capString)
  })
  return promise
}

const newWord = capitalize(3)
  .then((result) => {
    console.log('result: ', result)
  })
  .catch((err) => {
    console.log('error 222: ', err)
  })
// const newWord2 = capitalize(10)
// console.log(newWord)
// console.log(newWord2)
