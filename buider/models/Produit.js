class Produit {
    constructor() {
        this.nom = '';
        this.grade = '';
        this.categorie = '';
        this.marque = '';
        this.ingredients = [];
        this.allergenes = [];
        this.additifs = [];
    }



 addIngredient(ingredient) {
    this.ingredients.push(ingredient);
    return this;
 }

 addAllergene(allergene) {
    this.allergenes.push(allergene);
    return this;
 }

 addAdditif(additif) {
    this.additifs.push(additif);
    return this;
 }

    }

module.exports = Produit;