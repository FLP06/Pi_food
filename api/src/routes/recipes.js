const { Router } = require("express");
const recipes = Router();

const {getRecipeByName, getRecipeById} = require("../controllers/getRecipe");
const postRecipe = require("../controllers/postRecipe.js");
const deleteRecipe = require("../controllers/deleteRecipe.js");



recipes.get("/", getRecipeByName);
recipes.get("/:id", getRecipeById);
recipes.post("/", postRecipe);
recipes.delete("/:id", deleteRecipe);

module.exports = recipes; 