// Enumération des types
const ElementType = Object.freeze({
    INGREDIENT: 'INGREDIENT',
    ALLERGENE: 'ALLERGENE',
    ADDITIF: 'ADDITIF'
});

// Classe mère
class Element {
    constructor(nom, valeur, unité) {
        this.nom = nom;
        this.valeur = valeur;
        this.unité = unité;
    }
}

// Classes filles 
class Ingredient extends Element {}
class Allergene extends Element {}
class Additif extends Element {}

// Factory
class ElementFactory {
    static creer(type, nom, valeur, unité) {
        switch (type) {
            case ElementType.INGREDIENT:
                return new Ingredient(nom, valeur, unité);
            case ElementType.ALLERGENE:
                return new Allergene(nom, valeur, unité);
            case ElementType.ADDITIF:
                return new Additif(nom, valeur, unité);
            default:
                return null;
        }
    }
}

//-------------------------------------------------------------------

const sucre = ElementFactory.creer(ElementType.INGREDIENT, "Sucre", 10, "g");
console.log(sucre);

const gluten = ElementFactory.creer(ElementType.ALLERGENE, "Gluten", 500, "mg");
console.log(gluten);

const e330 = ElementFactory.creer(ElementType.ADDITIF, "Acide citrique (E330)", 100, "µg");
console.log(e330);
