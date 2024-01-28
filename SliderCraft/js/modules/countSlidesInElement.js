export default function(element) {
    let childrenElements = document.querySelector(element).children;
    let count = 0;
    
    for(let i=0; i<childrenElements.length; i++) {
        if(!childrenElements[i].classList.contains('slidercraft-class')) {
            count++;
        }
    }

    return count;
}