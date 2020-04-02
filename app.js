const Help = require('./help')
const Add = require('./add')
const Remove = require('./remove')
const List = require('./list.js')
const Read = require('./read.js')
switch (process.argv[2]) {
    case 'help':
        return Help()
        break
    case 'add':
        return Add()
        break
    case 'remove':
        return Remove()
        break
    case 'list':
        return List()
        break
    case 'read':
        return Read()
        break
    default:
        return Help()
}