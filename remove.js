const fs = require('fs')
Remove = () => {
    let inboxTitle = process.argv.findIndex(e => e === "--title")
    if (inboxTitle === -1 || process.argv[inboxTitle + 1] === undefined) {
        console.log('Options  :  ')
        console.log("--title \t\t\t\t titre du note")
        console.log("help \t\t\t\t to show help\n\n")
        console.log("manque contenuedu: ---title \n")
        return
    }
    else {
        let todo1 = fs.readFileSync('todos.json', 'utf8')
        let todo2 = JSON.parse(todo1)
        let todo3 = todo2.filter(el => el.Title !== process.argv[inboxTitle + 1])
        if (todo3.length === todo2.length) {
            console.log('titel non retrouver')
            return
        }
        let todo4 = JSON.stringify(todo3)
        fs.writeFileSync('todos.json', todo4)
        console.log('la notte selectionner de titre:', process.argv[inboxTitle + 1], '  est suprimer')
    }
}
module.exports = Remove