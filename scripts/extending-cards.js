
    // variable declaration

let icons = document.getElementsByClassName('icon'); 
let checkboxs = document.getElementsByClassName('checkbox');


    // function to check if an element is within the bounds of the view port

function isElementVisible(element) {
    let rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

    // function to check visibility of an element and if true marks the input as checked, which will apply styles to them

function checkVisibility() {

    for (let i = 0; i < icons.length; i++){

        if (isElementVisible(icons[i])) {
            
            checkboxs[i].checked = true;
        } else {
            checkboxs[i].checked = false;
        }
    }
}

    // event listener that runs a check on the visibilty of elements with the class name "icon"

window.addEventListener('scroll', checkVisibility);

checkVisibility();