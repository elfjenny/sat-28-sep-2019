const express = require ('express'); 
const bp = require ('body-parser'); 
const app = express(); // app est le résultat de l'invocation express
const registerRoutes = require('./routes'); //La variable registerRoutes contient ce qu'il y a dans le module './routes'
const port = 3000; 

app.use(bp.json())

//route registration

registerRoutes(app);//fonction qui abstrait l'enregistrement des routes

app.listen(port, () => {
    console.log("I'm available at http://localhost:3000");
});