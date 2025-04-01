let datetxt = "04 October 2001";  // Date text
let charArrDate = datetxt.split('');  // Split date into characters
let currentIndex = 0;  // Start index
let date__of__birth = document.querySelector(".date__of__birth span");  // Target element

setInterval(function(){
    if(currentIndex < charArrDate.length){
        date__of__birth.textContent += charArrDate[currentIndex];
        currentIndex++;
    }
}, 100);  // Delay per character