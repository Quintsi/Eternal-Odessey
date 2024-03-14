'use strict' ;

// alert('hi');

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""];
let stars = [5, 5, 3, 4];
let reviewDates = ["11/18/2023", "11/17/2023", "11/15/2023", "1/10/2024"];

let reviews = [
    "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
    "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
    "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
    "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
 ];

let reviewTitles = ["My Favorite Workout Game", "Very smooth", "Excellent Tech Support", "Nice Improvement"]

function starImages(rating){
    var imageText = '';
    for(let counter =1;counter <= rating; counter++){
        imageText += "<img src = 'star.png' alt = 'stars'class='star'>";
    }
    return imageText;
}

for(let counter=0; counter < reviewers.length; counter++){
    var  reviewCode = '';

    if(reviewType === 'p'){
        reviewCode = "<table class = 'prime'>";
    } else if(reviewType === 'N'){
        reviewCode = "<table class = 'new'>";
    }
    else {
        reviewCode = "<table>";
    }

    reviewCode += 
    '<caption>'+reviewTitles[counter]+'</caption>' +
    '<tr><th>By</th><td>'+reviewers[counter] +'</td></tr>'+
    '<tr><th>Review Date </th><td>'+reviewDates[counter] +'</td></tr>'+
    '<tr><th>Rating </th><td>'+starImages(stars[counter]) +'</td></tr>'+
    '<tr><td colspan = \'2\'>'+ reviews[counter] +'</td></tr>'+
    '</table';

    document.getElementsByTagName('article')[0].insertAdjacentHTML('beforeend',reviewCode);
}

























