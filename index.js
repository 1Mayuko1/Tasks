// 1 - find indices of two numbers in a list that add up to a target number
// 2 - by hashMap

const fs = require('fs')
let target = 8427
let res = []
const dataFromTxt = fs.readFileSync('/Users/vladkondrackiy/Tests/Tasks-/test.txt', {encoding:'utf8', flag:'r'})
let dictFromData = {...JSON.parse("[" + dataFromTxt + "]")}

console.log(dictFromData) // { ..., '9996': 7495, '9997': 9479, '9998': 8464, '9999': 6416 }


const findIndices = (target, dict) => {

    // your code

}

console.time('Time')
// code
console.timeEnd('Time')

