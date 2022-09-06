//REFERENCES
const buttons = document.querySelectorAll("button");
const popup = document.querySelector('.popup-cancel')
const close = document.querySelector('.fa-window-close')
//POP

buttons.forEach((button, index) => {
    console.log(index);
    if (index===1){
        button.addEventListener("click", (e) => {
           popup.style.display ="block";
             
            });
    }

});

// =========CLOSE BUTTON=======


    close.addEventListener("click", (e) => {
    popup.style.display ="none";
             
    });
    

