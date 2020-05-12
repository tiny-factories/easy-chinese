

//get all the element from HTML canvas
let scrollTexts = document.querySelectorAll(".indimarquee")

// console.log(scrollTexts);

//Is here to make the long text

let longText = []
const link = "https://tinyfactories.space"

function makeMarquee(){
for(i = 0; i <= scrollTexts.length; i++){

    //In the longTest we multiply the text in HTML 30 times.
    // Join is used to merge the multiplied text
    longText[i] = new Array(90).fill(scrollTexts[i].innerHTML).join(' - ');
    scrollTexts[i].innerHTML = longText[i];
    scrollTexts[i].setAttribute("href", link);
}}

makeMarquee()


