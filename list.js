const fs = require('fs')
List = () => {
    let todo1 = fs.readFileSync('todos.json', 'utf8')
    let todo2 = JSON.parse(todo1)
    console.log(`printing ${todo2.length} note(s)`)
    todo2.forEach(el => {
        console.log(`Titel: ${el.Title}`)
        console.log(`Body: ${el.Body}\n `)
    });


}

module.exports = List