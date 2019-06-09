const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const letters_con = document.getElementById('letters')
for (const letter of letters) {
    console.log(letter);

    const letter_div = document.createElement('div');
    letter_div.innerText = letter;
    console.log(letter_div);

    //set pos
    letter_div.style.position = 'absolute'
    const trans = Math.random() * 2 +1.5
    letter_div.style.left = (window.innerWidth * 0.98 - letter_div.offsetWidth) * Math.random() +'px';
    letter_div.style.top = (window.innerHeight * 0.97- letter_div.offsetHeight) * Math.random() +'px';
     letter_div.style.fontSize = Math.random() * 100 + 100 + '%'
     letter_div.style.opacity = Math.random()
    letters_con.appendChild(letter_div);

    letter_div.style.left = (window.innerWidth * 0.98 - letter_div.offsetWidth) * Math.random() +'px';
    letter_div.style.top = (window.innerHeight * 0.98- letter_div.offsetHeight) * Math.random() +'px';



    //console.log(window.innerHeight * Math.random())
    //console.log(window.innerWidth * Math.random())
    
}

requestAnimationFrame = window.requestAnimationFrame;
function step(timestamp) {
    
    for (const letter_div of letters_con.childNodes) {   
        letter_step(letter_div);
    }
    
}

function letter_step(letter_div) {
    letter_div.style.fontSize = Math.random() * 100 + 100 + '%'  
    letter_div.style.opacity = Math.random()  

    const trans = Math.random() * 2000 +1500 
    letter_div.style.left = (window.innerWidth * 0.98 - letter_div.offsetWidth) * Math.random() +'px';
    letter_div.style.top = (window.innerHeight * 0.98 - letter_div.offsetHeight) * Math.random() +'px';
    letter_div.style.transition = trans +'ms';

    setTimeout(function () {
        requestAnimationFrame(function() {
            letter_step(letter_div);
         });
    }, trans);
}
requestAnimationFrame(step); 