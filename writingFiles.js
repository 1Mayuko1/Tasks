const fs = require('fs');

let list = [];
for ( let i = 0; i < 10000; i++ ) {
    let a = Math.round( Math.random() * 10000 );
    list.push(a);
}

const array = list.toString()
fs.writeFile('/Users/vladkondrackiy/Tests/Tasks-/test.txt', array, err => {
    if (err) {
        console.error(err)
    } else {
        console.log('Done!')
    }
})

// Очищення файлу
// fs.truncate('/Users/vladkondrackiy/Tests/Tasks-/test.txt', 0, function(){console.log('done')})
