const { Diet } = require(`../db.js`)
const diets = require("../routes/diets.js")

module.exports = async () => {

    try {

        const diets = await Diet.findAll();
        res.status(200).json(diets)
        console.log("hola")
        if(1 > 2 ) throw Error ("algo salio mal")

        return  "hola";

        
        
    } 
    catch (err) {

        return {err: err.message}
    
    }
}