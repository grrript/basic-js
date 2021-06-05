const now = Date.now()
// const now = date.now()
const past = 1622172863263
console.log('now: ', now)
const date1 = new Date('2019/10/1 00:00:00')
console.log('date1: ', date1)
const diffInMilliseconds = Math.abs(now - past)
const diffInMin = Math.floor(diffInMilliseconds / 1000 / 60)
console.log('diffInMilliseconds: ', diffInMilliseconds)
console.log('diffInMin: ', diffInMin)

const TIME_DIFF_TARGET = 15 /* days */ * 24 /* hours */ * 60 /* min */
console.log('TIME_DIFF_TARGET: ', TIME_DIFF_TARGET)
