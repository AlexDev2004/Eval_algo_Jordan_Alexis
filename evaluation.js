// Question 4 :

// function calculerMoyenne(){
//     notes = [12, 15, 8]
//     somme = 0
//     for(let i = 1 ; i <= 3 ; i++){
//         somme = notes[i]
//     }
//     moyenne = somme / 3
//     console.log(moyenne)
// }

// Les variables utilisées ne sont jamais déclarées, et il manque les points virgules en fin de lignes.
// De plus, pour calculer la moyenne entre les éléments du tableau, il faudrait incrémenter la variable somme, et pas seulement la réaffecter.
// Voici ma proposition :

function calculerMoyenne(){
    let notes =[12,15,8];
    let somme = 0;
    for(let i=0;i<3;i++){
        somme += notes[i];
    }
    let moyenne = somme/3;
    console.log(moyenne);
}

// Question 5 :

function estPair(nombre){
    if(nombre%2 == 0){
        return true
    }else{
        return false
    }
}

// Cette fonction indique si le nombre donné est pair ou impair, grace à l'opérateur % (modulo), qui calcule le reste de la division
 
// PARTIE 2 :
// Exercice 1 :

let tab1 =[3,15,7,22,9,18,4,12];
let compteur = 0;
for(let i=0;i<tab1.length;i++){
    if(tab1[i] > 10){
        console.log(tab1[i]);
        compteur++;
    }
}
console.log(compteur," Nombres sont supérieurs à 10.");


// Exercice 2 :

function calculerPrixTTC(prixHT,tauxTVA){
    let TVA = tauxTVA/100;
    let prixTTC = prixHT + prixHT*TVA;
    return prixTTC;
}

// PARTIE 3 :

const livres = [
  ["1984", "Orwell", 1949, true],
  ["Le Seigneur des Anneaux", "Tolkien", 1954, false],
  ["Harry Potter", "Rowling", 1997, true],
  ["Fondation", "Asimov", 1951, true]
]

// 1.
function afficherLivres(tab){
    console.log("=== Catalogue de la bibliothèque ===");
    for(let i=0;i<tab.length;i++){
        let dispo;
        if(tab[i][3]){
            dispo = "Disponible";
        }else{
            dispo = "Emprunté";
        }
        console.log(i+1+". "+tab[i][0]+" par "+tab[i][1]+" ("+tab[i][2]+") - "+ dispo);
    }
}

// 2.
function rechercherLivre(tab,titre){
    for(let i=0;i<tab.length;i++){
        if(tab[i][0] == titre){
            return i+1;
        }
    }
    return -1;
}

// 3.
function emprunterLivre(tab,pos){
    if(tab.length >= (pos)){
        if(tab[pos-1][3]){
            tab[pos-1][3] = false;
            return console.log("Emprunt réussi : ", tab[pos-1][0]);
        }
        return console.log("Ce livre est déjà emprunté");
    }
    return console.log("Livre non trouvé");
}

// Alogrithme principal :

function rechercherEtEmprunter(tab,titre){
    afficherLivres(tab);
    console.log("Recherche du livre : ",titre);
    if(rechercherLivre(tab,titre) >= 0){
        console.log("Livre trouvé à la position ",rechercherLivre(tab,titre));
        emprunterLivre(tab,rechercherLivre(tab,titre));
    }else{
        console.log("Le livre recherché n'existe pas.");
    }
}