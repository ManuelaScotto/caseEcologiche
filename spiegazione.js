/* ****************************************************
CREAZIONE COSTANTI 
****************************************************** */

const eco1 = document.getElementById('eco1');
const negotiation1 = document.getElementById('negotiation1');
const sold1 = document.getElementById('sold1');

const eco2 = document.getElementById('eco2');
const negotiation2 = document.getElementById('negotiation2');
const sold2 = document.getElementById('sold2');

const eco3 = document.getElementById('eco3');
const negotiation3 = document.getElementById('negotiation3');
const sold3 = document.getElementById('sold3');


/* ****************************************************
CREAZIONE EVENTI
****************************************************** */

eco1.addEventListener('click', getEco);
negotiation1.addEventListener('click', getNegotiation);
sold1.addEventListener('click', getSold);

eco2.addEventListener('click', getEco);
negotiation2.addEventListener('click', getNegotiation);
sold2.addEventListener('click', getSold);

eco3.addEventListener('click', getEco);
negotiation3.addEventListener('click', getNegotiation);
sold3.addEventListener('click', getSold);


/* ****************************************************
CREAZIONE CALLBACK
****************************************************** */
// per ogni funzione creo una variabile per andare a recuperare l'immagine corrispondente ed attivare l'animazione 
// utilizzando .toggle al primo click l'immagine si attiva al secondo si disattiva

function getEco(e) {
    let animationEco = e.target.parentElement.firstChild.nextElementSibling;
    animationEco.classList.toggle('move');
}

function getNegotiation(e) {
    let animationNegotiation = e.target.previousElementSibling.previousElementSibling.previousElementSibling;
    animationNegotiation.classList.toggle('move');
    // if (animationNegotiation.nextElementSibling.className.includes('move')) {
    //     animationNegotiation.nextElementSibling.classList.remove('move')
    // }
}


// .disabled permette di disabilitare i bottoni quando la casa viene venduta
// la condizione if disattiva l'immagine della casa in trattativa quando  queste vengono vendute
function getSold(e) {
    let animationSold = e.target.previousElementSibling.previousElementSibling.previousElementSibling;
    animationSold.classList.toggle('move');
    animationSold.nextElementSibling.disabled = true;
    animationSold.nextElementSibling.nextElementSibling.disabled = true;
    if (animationSold.previousElementSibling.className.includes('move')) {
        animationSold.previousElementSibling.classList.remove('move')
    }
}