// # Partie 1
// - # Exo 1
//     - ## Créez un tableau comprenant 5 prénoms, la variable doit se nommer "tabPrenoms"
//     - ## Récuperez la longueur de ce tableau et stockez la dans une variable du nom de "tabLength" et affichez là en suite via un console.log()
//     - ## Affichez dans la console chaque prénom précédé de "Bonjour " exemple
//     - ## Bonjour Nicolas

// let tabPrenoms = ['jean', 'claude', 'pascal', 'pierre', 'eugene'];
// let tabLength = tabPrenoms.length
// console.log(tabLength);
// console.log(`Bonjour ${tabPrenoms[0]}`);


//  - # Exo 2 
//     - ## Créez une variable qui comprend un chiffre aléatoire entre 1 et 10
//     - ## Posez la question a l'utilisateur, demandez lui d'entrer un chiffre entre 1 et 10
//     - ## Si le nombre entré par l'utilisateur est différent du nombre aléatoire généré alors répétez la question
//     - ## Sinon félicitez l'utilisateur d'avoir trouvé le bon nombre !

// let random = Math.floor(Math.random()*11);
// let question = prompt('Choisissez un chiffre entre 1 et 10');

// if (parseInt(question) === random) {
//     console.log("bien uej");
// } else {
//     prompt('Choisissez un chiffre entre 1 et 10')
// }


//  - # Exo 3 -> Bonus : Le QCM
//     - ## Créez un QCM avec 3 questions,les bonnes réponses seront stockées dans un tableau.
//     - ## Astuce : 
//     - ## - Il faudra faire une condition
//     - ## - Il y aura 3 tableaux : 
//     - ## - Un tableau avec les 3 questions
//     - ## - Un tableau avec les 3 réponses
//     - ## Un tableau avec les questions + les réponses aux quelles on à correctement répondu
//     - ## Et plein d'autres choses bonne chance.

// let q1 = prompt("jeff?");
// let q2 = prompt("beff?");
// let q3 = prompt("zeff?");

// let tabQ = [q1, q2, q3];
// let tabR = ['jeff', 'beff', 'zeff'];
// let tabQR = [];


// if (tabQ[0] == tabR[0] && tabQ[1] == tabR[1] && tabQ[2] == tabR[2]) {
//     tabQR.push(`question 1: jeff? reponse = ${q1} question 2: beff? reponse = ${q2}`);


// console.log(tabQR);




//  # Partie 2
// - ## Prompt()
//     - ## prompt() me permet de poser une question à l'utilisateur,la réponse qu'il entrera sera en suite stockée dans la variable "reponse".

//     - ## let reponse = prompt("Bonjour comment vas-tu ?");

//     - ## J'affiche la réponse donnée par l'utilisateur

//     - ## console.log(reponse);

// - ## Alert()
//     - ## let question = prompt('Comment vas-tu ?');

//     - ## alert() permet d'ouvrir une boite de dialogue avec la valeur que je mentionnerai entre les parenthèses.

//     - ## alert("Super je suis content que tu ailles bien");

// - ## Exercice
//     - ## Le but de l’exercice est de créer  un « programme » permettant de vous répondre SUR LA CONSOLE .

//     - ## Vous aurez besoin de créer une variable contenant la fonction prompt avec comme paramètres « Quelle temps fait-il aujourd’hui ? « 

//     - ## Le programme doit ce comporter de cette manière :

//     - ## Si vous écrivez « soleil » dans votre prompt , la console vous réponds «  Sortez en T-shirt »

//     - ## Si vous écrivez « vent » dans votre prompt, la console vous réponds « Sortez en Pull »

//     - ## Si vous écrivez « pluie » dans votre prompt, la console vous réponds « Mettez une veste »

//     - ## Si vous écrivez « Neïge  » dans votre prompt, la console vous réponds « Reste chez toi, il fait froid »

//     - ## Et si vous écrivez un message est différent de toute ceux inscrits au-dessus, la console vous réponds « je n’ai pas compris »


// let temps = prompt("quel temps fait-il aujourd'hui?");

// if (temps == "soleil") {
//     console.log("sortez en t-shirt");
// } else if (temps == "vent") {
//     console.log("sortez en pull");
// } else if (temps == "pluie") {
//     console.log("pluie");
// } else if (temps == "neige") {
//     console.log("reste chez toi, il fait froid");
// } else {
//     console.log("pakompri");
// }

