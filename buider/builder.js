const Produit = require('./models/Produit');



class ProduitBuilder {


    constructor() {
        this.produit = new Produit();
    }

    setCategorie(categorie) {
        this.produit.categorie = categorie;
        return this;
    }

    setMarque(marque) {
        this.produit.marque = marque;
        return this;
    }

    setIngredients(ingredients) {
        this.produit.ingredients = ingredients;
        return this;
    }

    setAllergenes(allergenes) {
        this.produit.allergenes = allergenes;
        return this;
    }

    setAdditifs(additifs) {
        this.produit.additifs = additifs;
        return this;
    }

    setNom(nom) {
        this.produit.nom = nom;
        return this;
    }

    setGrade(grade) {
        this.produit.grade = grade;
        return this;
    }


    build() {
        return this.produit;
    }

}


module.exports = ProduitBuilder;