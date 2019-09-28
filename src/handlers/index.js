const characters = require ('./characters');
const countries = require ('./countries');

// ça exporte la variable characters qui contient le module définit par le path './characters'
module.exports = {
    characters, countries
}; 
