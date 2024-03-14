'use strict';
 //alert('hi'); 

const categories = [ 'Account  Management and Security', 'Information and Troubleshooting','Player Reporting and Sanctions','Purchases and Subscriptions',
];
const games = ['Eternal - Odyssey 1','Eternal - Odyssey 2','Eternal - Odyssey 3','Eternal - Odyssey 4','Eternal - Odyssey 5','Eternal - Odyssey 6','Eternal - Odyssey 7','Eternal - Odyssey 8','Eternal - Odyssey 9','Eternal - Odyssey 10'];

function createcheckbox(){
    const container = document.getElementById('category');

    categories.forEach(category =>{
        const checkbox = document.createElement('input');
        checkbox.type ='checkbox';
        checkbox.name = 'category';
        checkbox.value = category;

        const label = document.createElement('label');
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(category));

        container.appendChild(label);
        container.appendChild(document.createElement('br'));
    }); 
}

function getSelectedItems(){
    const checkboxes = document.querySelectorAll('input[name="category"]:checked');
    const selectedCategories = Array.from(checkboxes).map(checkbox => checkbox.value);
    console.log('Selected categories:' , selectedCategories);
}



function createGameOptions(){
    const selectContainer = document.getElementById('selectGame');

    games.forEach(game => {
        const gameOption = document.createElement('option');
        gameOption.value = game;
        gameOption.text = game;
        selectContainer.appendChild(gameOption);
    });
}

window.onload = function (){
    createcheckbox();
    createGameOptions();
};


const MAX_WORDS = 1000;
document.getElementById('limit').innerHTML = MAX_WORDS;

var wordCountBox = document.getElementById('countValue');
var warningBox = document.getElementById('warningBox');
var submitButton = document.getElementById('submitButton');


document.getElementById('issueDes').addEventListener('keyup',updateCount);
submitButton.addEventListener('click',handlesubmit);

function updateCount(){
    document.getElementById('warningBox').innerHTML = "";

    var issueDesText = document.getElementById('issueDes').value;
    var charCount = countCharacters(issueDesText);

    try {
        if (charCount > MAX_WORDS){
            throw new Error ('You have exceeded the character count limit');
        }
    } catch(e){
        document.getElementById('warningBox').innerHTML = e.message;
    } finally {
        document.getElementById("countValue").innerHTML = charCount;
    }
}

    function countCharacters(textStr){
        var issueDesregx = /\s/g;
        var chars = textStr.replace(issueDesregx,"");
        return chars.length;
    }

function handlesubmit(){
    var submitMessage = document.getElementById('submitMessage');
    submitMessage.innerHTML='Thank you for contacting us, an expert will contact you within 24 hours.'
    var issueDesText = document.getElementById('issueDes').value;
   console.log('submitted issue description: ', issueDesText);
}


