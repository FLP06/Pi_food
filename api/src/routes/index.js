const { Router } = require('express');

// Importar todos los routers;

// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// router.use('/recipes', (req,re)); // contiene todas las rutas de recipes
// // router.use('/diet', diet); // todas las rutas de Diet


router.get('/', async (req, res) => { 
    try {
      const Alldiet = await Diet.findAll();
      res.status(200).send(Alldiet);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  router.get("/", async (req, res)=>{
    try {
      
    } catch (error) {
      
    }
  })


router.get('/all', async (req, res) => { /* listar todas las dietas y buscar por name */
  const name = req.query.name;
  let recipeTotal = await model.getDbinfo();
  if (name) {
    let recipeName = await recipeTotal.filter((recipe) =>
      recipe.name.toLowerCase().includes(name.toString().toLowerCase())
    );
    recipeName.length
      ? res.status(200).send(recipeName)
      : res
          .status(404)
          .send(
            'No existe Receta que contenga ese Nombre: ' + name.toLowerCase()
          );
  } else {
    res.status(200).send(recipeTotal);
  }
});


module.exports = router;