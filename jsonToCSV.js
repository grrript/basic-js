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
  let csvLine = ''
  // add headers as the first row
  cols.map((col, index) => {
    csvLine += col + (isEndOfCols(numOfCols, index) ? '\n' : ',')
  })
  csvFile += csvLine

  // add the rows
  const data = json.map((item) => {
    csvLine = ''
    cols.map((colKey, index) => {
      csvLine += item[colKey] + (isEndOfCols(numOfCols, index) ? '\n' : ',')
    })
    csvFile += csvLine
  })
  console.log('csvFile: ', csvFile)
  return csvFile
}

const csv = jsonToCSV(json)

const rows = [
  ['name1', 'city1', 'some other info'],
  ['name2', 'city2', 'more info'],
]

let csvContent = 'data:text/csv;charset=utf-8,'

rows.forEach(function (rowArray) {
  let row = rowArray.join(',')
  csvContent += row + '\r\n'
})
console.log('csvContent: ', csvContent)
