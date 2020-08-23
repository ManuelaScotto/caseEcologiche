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
function getEco(e) {
    let animationEco = e.target.parentElement.firstChild.nextElementSibling;
    animationEco.classList.toggle('move');
}

function getNegotiation(e) {
    let animationNegotiation = e.target.previousElementSibling.previousElementSibling.previousElementSibling;
    animationNegotiation.classList.toggle('move');
}

function getSold(e) {
    let animationSold = e.target.previousElementSibling.previousElementSibling.previousElementSibling;
    animationSold.classList.toggle('move');
    animationSold.nextElementSibling.disabled = true;
    animationSold.nextElementSibling.nextElementSibling.disabled = true;
    if (animationSold.previousElementSibling.className.includes('move')) {
        animationSold.previousElementSibling.classList.remove('move')
    }
}