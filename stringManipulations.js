const text = 'rocks'
console.log(text[0])
console.log(text[1])
console.log(text.substr(1))
console.log(text.substr(1, 2))

const strCount = 'USER_HAS_LOGGED_IN_'.length
console.log('strCount: ', strCount)
const date = 'USER_HAS_LOGGED_IN_01/01/2021'.substr(strCount)
console.log('date: ', date)
