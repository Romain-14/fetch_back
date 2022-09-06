import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';

import router from './router/index.routes.js';

const app = express();

// définition de la route static public
const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);
app.use(express.static(path.join(__dirname + "/public")));

// middleware express natif qui permets de récupérer les données post afin de les parser
app.use(express.json()); // pour parser le content-type application/json
app.use(express.urlencoded({extended: true})); // pour parser les données formulaire post 
// anciennement librairie body-parser qu'il fallait import en tant que module avant la version 4.x d'express

app.use(router);

app.listen(9002, ()=> {
    console.log(`Listening at http://localhost:9002`);
});