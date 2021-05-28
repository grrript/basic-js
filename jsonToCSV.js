const json = [
  {
    name: 'Rocks',
    job: 'frontend developer',
  },
  {
    name: 'David',
    job: 'backend developer',
  },
  {
    name: 'John',
    job: 'project manager',
  },
]

const isEndOfCols = (numOfCols, index) => {
  if (index === numOfCols - 1) {
    return true
  }
  return false
}
const jsonToCSV = (json) => {
  const cols = Object.keys(json[0])
  console.log(cols)
  const numOfCols = cols.length
  let csvFile = ''
  cols.map((col, index) => {
    csvFile = csvFile + col + (isEndOfCols(numOfCols, index) ? '\n' : ',')
  })
  const data = json.map((item) => {
    return cols.map((colKey, index) => {
      csvFile =
        csvFile + item[colKey] + (isEndOfCols(numOfCols, index) ? '\n' : ',')
    })
  })
  console.log('csvFile: ', csvFile)
  return csvFile
  console.log('data: ', data)
}

const csv = jsonToCSV(json)
