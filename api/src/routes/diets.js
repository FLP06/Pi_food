const { Router } = require('express');
const diets = Router();

const getDiets = require(`../controllers/getDiets.js`)


diets.get("/", async (req, res) =>{
    try {
        console.log("hola")
        const getInfo = await getDiets()
     res.status(200).json(getInfo)
    } catch (error) {
        res.status(400).send(error.message)
    }
    
})
// diets.post("/", getDiets)
// diets.delete("/", getDiets)

// diets.delete("/type", getDiets)
// diets.get("/type", getDiets)

module.exports = diets;