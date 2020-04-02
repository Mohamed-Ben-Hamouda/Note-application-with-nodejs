const fs = require('fs')
Add = () => {
    let newinput = {}
    let inboxTitle = process.argv.findIndex(e => e === "--title")
    if (inboxTitle === -1 || process.argv[inboxTitle + 1] === undefined) {
        console.log('Options  :  ')
        console.log("--title \t\t\t\t titre du note")
        console.log("--body \t\t\t\t body du note\n\n")
        console.log("manque contenuedu: ---title ou  ---body\n")
        return
    } else {
        newinput.Title = process.argv[inboxTitle + 1]

    }
    let inboxBody = process.argv.findIndex(e => e === "--body")
    if (inboxBody === -1 || process.argv[inboxBody + 1] === undefined) {
        console.log('Options  :  ')
        console.log("--title \t\t\t\t titre du note")
        console.log("--body \t\t\t\t body du note\n\n")
        console.log("manque ou  contenue du: ---titel  ou  ---body\n")
        return
    } else {
        newinput.Body = process.argv[inboxBody + 1]

    }

    let todo1 = fs.readFileSync('todos.json', 'utf8')
    let todo2 = JSON.parse(todo1)
    let todo3 = todo2.concat(newinput)
    let todoF = JSON.stringify(todo3)
    fs.writeFileSync('todos.json', todoF)
    console.log('note ajouter est:  ')
    console.log(`Titel: ${newinput.Title}`)
    console.log(`Body: ${newinput.Body}`)

}
module.exports = Add