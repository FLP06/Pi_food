require('dotenv').config();
const axios = require("axios")
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db");
const { Op } = require("sequelize");




const reduceObjectsRecipes = (elemt) => {
    return {
    id: elemt.id,
    name: elemt.name,
    summary: elemt.summary,
    healthScore: elemt.healthScore,
    steps: elemt.analyzedInstructions[0] ? elemt.analyzedInstructions[0].steps.reduce((obj, pass) => {
        obj[pass.number] = pass.step
        return obj
    }, {}) :
        {},
    diets: elemt.diets
    }
}

const modifyDietAttributes = (atribut) => {
    atribut = atribut.toJSON();
    atribut.diets = atribut.diets.map(diet => diet.name);
    return atribut;
}

getRecipeByName = async ()=>{
    try {
        const { name } = req.query
        // buscar recetas en la api
        const { results } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`
            )
            
            .then(elemt => elemt.data);

            let recipesApi = !!name? results.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase())) :results;

            //  // //Objeto con las receta y con las propiedades necesarias
            recipesApi = recipesApi.map((recipe) => reduceObjectsRecipes(recipe))

            let recipesDB = await Recipe.findAll({
                where: !!name? {
                    name: {
                        [Op.substring]: name.toLowerCase()
                    }
                } : {},
                include: {
                    model: Diet,
                    as: "diets",
                    attributes: ["name"],
                    through: { attributes: [] }
                }
            })
        
            recipesDB = recipesDB.map(recipe => modifyDietAttributes(recipe));

        const recipesAll = recipesApi.concat(recipesDB);

        return (recipesAll.length) ? res.json(recipesAll) : res.json([]);

    } catch (error) {
        return res.status(404).json(error)
    }

}

getRecipeById = async(req,res)=>{

    const { id } = req.params

    try {
        if (id === undefined) return res.status(404).send("no hay ID");

        if (!id.includes("-")) {

            const recipeApi = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
                .then(elemt => elemt.data);

            if (recipeApi.hasOwnProperty('id')) return res.json(reduceObjectsRecipes(recipeApi));


        }
        else {

            const recipeDB = await Recipe.findByPk(id, {
                include: {
                    model: Diet,
                    as: "diets",
                    attributes: ["name"],
                    through: { attributes: [] }
                }
            });

            return res.json(modifyDietAttributes(recipeDB));

        }

        return res.status(404).send("No se encontro receta")

        
    } catch (error) {
        return res.status(404).json(error)
    }
}


module.exports ={
    getRecipeByName,
    getRecipeById,
   
}