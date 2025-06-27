
const ElementType = Object.freeze({
    INGREDIENT: 'INGREDIENT',
    ALLERGENE: 'ALLERGENE',
    ADDITIF: 'ADDITIF'
});



class Element{

    constructor(nom, valeur, unité) {
        this.nom = nom;
        this.valeur = valeur;
        this.unité = unité;
    }
}


class Ingredient extends Element{
    constructor(nom, valeur, unité, milligramme, microgramme) {
        super(nom, valeur, unité);
        this.milligramme = milligramme;
        this.microgramme = microgramme;
    }
}   

class Allergene extends Element{        
    constructor(nom, valeur, unité, milligramme, microgramme) {
        super(nom, valeur, unité);
        this.milligramme = milligramme;
        this.microgramme = microgramme;
    }
}

class Additif extends Element{
    constructor(nom, valeur, unité, milligramme, microgramme) {
        super(nom, valeur, unité);
        this.milligramme = milligramme;
        this.microgramme = microgramme;
    }
}


class ElementFactory {
    static creer(type, nom, valeur, unité, milligramme, microgramme) {
        switch (type) {
            case ElementType.INGREDIENT:
                return new Ingredient(nom, valeur, unité, milligramme, microgramme);
            case ElementType.ALLERGENE:
                return new Allergene(nom, valeur, unité, milligramme, microgramme);
            case ElementType.ADDITIF:
                return new Additif(nom, valeur, unité, milligramme, microgramme);
            default:
                return null;
        }
    }
}


//-------------------------------------------------------------------------

const sucre = ElementFactory.creer(ElementType.INGREDIENT, "Sucre", 10, "g", 10000, 10000000);
console.log(sucre);

const gluten = ElementFactory.creer(ElementType.ALLERGENE, "Gluten", 0.5, "g", 500, 500000);
console.log(gluten);

const e330 = ElementFactory.creer(ElementType.ADDITIF, "Acide citrique (E330)", 0.1, "g", 100, 100000);
console.log(e330);