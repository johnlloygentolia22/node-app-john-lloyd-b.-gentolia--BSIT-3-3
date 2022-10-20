const fs = require(`fs`)

const del = function(id, oldNote) {
    const note = JSON.parse(oldNote)

    const NewNote = note.filter(function(n, idx) {
    return n.id!==id
    }) 
    fs.writeFileSync(`./note.txt`, JSON.stringify(NewNote));

}
module.exports = del