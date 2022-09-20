// find indices of two numbers in a list that add up to a target number

const fs = require('fs')
let target = 8427
let res = []

const findIndices = (target, list) => {
    list.map((itemX, indexX) => {
        list.map((itemY, indexY) => {
            if (itemX + itemY === target) {
                res.push(indexX, indexY)
            } else {
                return []
            }
        })
    })

    let array = [...new Set(res)]
    return array.length === 0 ? [] : [list[array[0]], list[array[1]]]
}

console.time('Time')
const data = fs.readFileSync('/Users/vladkondrackiy/Tests/Tasks-/test.txt',
    {encoding:'utf8', flag:'r'})
console.log('RES -', findIndices(target, JSON.parse("[" + data + "]")))
console.timeEnd('Time')
