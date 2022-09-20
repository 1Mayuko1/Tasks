// find indices of two numbers in a list that add up to a target number
// list: [2, 7, 11, 15], target: 9

let target = 9
let list = [11, 2, 7, 15]
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

console.log(findIndices(target, list))
