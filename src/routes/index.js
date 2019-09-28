const characterRouter = require('./characters'); 
const countryRouter = require ('./countries')

// on déclare un router
module.exports = function (app) { // fonction anonyme qui prend le parametre 'app'
    app.use('/characters', characterRouter);  // toutes les routes déclarées dans characters débuteront par /characters/xx
    app.use('/countries', countryRouter);  //et la deuxième partie du chemin sera defini par le routercharacter.
}