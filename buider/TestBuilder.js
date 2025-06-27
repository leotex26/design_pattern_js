const ProduitBuilder = require('./builder');
const Categorie = require('./models/Categorie');
const Marque = require('./models/Marque');
const Ingredient = require('./models/Ingredient');
const Allergene = require('./models/Allergene');
const Additif = require('./models/Additif');

const categorie = new Categorie("Produits laitiers");
const marque = new Marque("Danone");
const ingredient = new Ingredient("Lait", 100);
const allergene = new Allergene("Lactose", 100);
const additif = new Additif("Colorant", 100);


const produit = new ProduitBuilder()
    .setNom("Yaourt nature")
    .setGrade("B")
    .setCategorie(categorie)
    .setMarque(marque)
    .setIngredients([ingredient])
    .setAllergenes([allergene])
    .setAdditifs([])
    .build();

console.log(produit);