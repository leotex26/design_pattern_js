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
        if (!this.produit.nom) {
            throw new Error('Nom is required');
        }
        if (!this.produit.grade) {
            throw new Error('Grade is required');
        }
        if (!this.produit.categorie) {
            throw new Error('Categorie is required');
        }
        if (!this.produit.marque) {
            throw new Error('Marque is required');
        }

        return this.produit;
    }

}


module.exports = ProduitBuilder;