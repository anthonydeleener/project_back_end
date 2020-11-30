"use strict";
//utile?
//var escape = require("escape-html");
//const FILE_PATH = __dirname + "/../data/films.json";


 /*
  *Une carte contient un array de symbol. Chaque symbol fonctionnera en tant qu'un bouton. Lors qu'on clique sur un symbol
  *on recupere son id et on le compare avec un aure symmbol (celui de pile au milieux)
  *si l'id est identique, on saura que c'est un match. Sinon un mismatch. 
 */

class Carte 
{
  constructor() {
   let id;
   let nombreSymbol=8;
   let listSymbol ;
  }

  /*
  * Créer une carte
  * creer une carte avec 8 symbols.
  */


  /*
  * Comparer id d'un symbol d'une avec une autre carte. 
  * param {idCarte1} {idCarte2}
  * condition d'invoquation: si il y a deux symbols séléctionnés. Il y aura 2 var qui stocke id de symbols séléctionnées.
  * si meme id -> match -> afficher nouvelles carte(next round)
  * si pas meme id-> mismatch --> afficher message --> programme attend que utilisateur choissise 2 symbols. 
  */


  /*
  * séléctionner un symbol 
  * invoqué quand le un symbol est cliqué.
  * return id du symbol
  */


}
module.exports = Carte;
