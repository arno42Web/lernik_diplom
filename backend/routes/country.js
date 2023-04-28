const express = require('express')
const router = express.Router();
const Country = require('../models/country')

//get all 
router.get('/',async(req,res)=>{
    try{
        const countries = await Country.find()
        res.json(countries)
    }
    catch{
        res.status(500).json({message: err.message})
    }
})

//find one
router.get('/:country',async(req,res)=>{
    try{
        let to_search  = req.params;
        const countries = await Country.find({name:to_search.country})
        res.json(countries)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})
//get one by counrty and year
router.get('/:country/:year',async(req,res)=>{
    try{
        let to_search  = req.params;
        const countries = await Country.find({name:to_search.country}).find({year:to_search.year})
        // res.json(req.params)
        res.json(countries)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})
//get one by counrty and year month
router.get('/:country/:year/:month',async(req,res)=>{
    try{
        let to_search  = req.params;
        const countries = await Country.find({name:to_search.country})
        .find({year:to_search.year}).find({month:to_search.month})
        res.json(countries)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})

//create one
router.post('/',async(req,res)=>{
    const countries = new Country({
        name: req.body.name,
        import_value: req.body.imp_value,
        export_value:req.body.exp_value,
        full_date:req.body.date_,
        year:req.body.year_,
        month:req.body.month_,
        day:req.body.day_,

    })
    try {
        const newcontry = await countries.save()
        res.status(201).json(newcontry)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})

// update one 
router.patch('/:id',(req,res)=>{

})

// delete one 

// router.delete('/:id',async(req,res)=>{

//     try 
//     {
//         await Country.remove()
//         res.json({message:"country has been removed!"})
//     } catch (error) 
//     {
//         res.status(500).json({message:"could not find such a counntry!"})
//     }

// })

module.exports = router 