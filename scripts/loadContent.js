'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // Fetch header content
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

});

document.addEventListener('DOMContentLoaded', function() {
    // Fetch header content
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

});   