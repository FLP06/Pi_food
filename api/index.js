//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const server = require('./src/app.js');
// const { conn } = require('./src/db.js');

// // Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   console.log("conectado en la base de datos")
//   server.listen(3001, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });

// const server = require('./src/app.js');
// const { conn, Diet } = require('./src/db.js');

// const typesOfDiets = ["dairy free",
//                       "fodmap friendly",
//                       "gluten free",
//                       "ketogenic",
//                       "lacto ovo vegetarian",
//                       "paleolithic",
//                       "pescetarian",
//                       "primal",
//                       "vegan",
//                       "whole 30"]

// Syncing all the models at once.
// conn.sync({ force: false })
//     .then(() => {
//       server.listen(process.env.PORT, () => {
//           console.log('%s listening at 3001'); // eslint-disable-line no-console
//           typesOfDiets.map((type) => Diet.findOrCreate({where: {name: type}}))
//         });
//     });

const server = require('./src/app');
const { conn } = require('./src/db');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  console.log('DB conectada, master')
  server.listen(3001, () => {
    console.log('Server on port 3001'); // eslint-disable-line no-console
  });
});