const express = require('express')
const router = express.Router()
const tableConent = require ('./models/tableContent')
router.get('/', async (req,res)=>{
    try{
    const table = await tableConent.find()
    console.log('ok table')
  res.status(200).json(table)
}catch(error){
    res.status(404).json({error : error.message})
}
})
router.post('/',async (req,res)=>{
    const newTable = new tableConent();
    newTable.title=req.body.title;
    newTable.nb_ligne=req.body.nb_ligne;
    newTable.nb_colonne=req.body.nb_colonnes;
    newTable.creator=req.body.creator;
    newTable.contenu='';
    newTable.created=''
    newTable.modified=[]
    try {
        await newTable.save()

        res.status(201).json('est cree')}
    catch(error){
        res.status(400).json({message : error.message})
    }
})
router.delete('/',(req,res)=>{
    
})
module.exports= router