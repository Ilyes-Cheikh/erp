const mongoose = require('mongoose')
const tableschema = mongoose.Schema({
    title : String,
    nb_lignes : Number,
    nb_colonnes : Number,
    creator: String,
    contenu : String,
    created: Date,
    modified : [Date]

})
var tableContent = mongoose.model('tableContent',tableschema)
module.exports=tableContent
