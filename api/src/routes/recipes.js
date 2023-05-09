const {getRecipeByName, getRecipeById} = require("../controllers/getRecipes");
const postRecipe = require("../controllers/postRecipe.js");
const deleteRecipe = require('../controllers/deleteRecipe.js');
const router = require(".");

// get recipe.js
router.get("/", getRecipeByName);
router.get("/:id", getRecipeById);
router.post("/", postRecipe);
router.delete("/:id", deleteRecipe); 


module.exports = router