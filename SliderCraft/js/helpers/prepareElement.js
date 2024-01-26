export default function(element, width, height) {
    let mainSliderElement = document.querySelector(element);
    mainSliderElement.style.width = width;
    mainSliderElement.style.height = height;

    let childrenElements = document.querySelector(element).children;
    
    let index = 0;
    for(let i=0; i<childrenElements.length; i++) {
        childrenElements[i].dataset.slide = index;
        childrenElements[i].style.display = 'none';
        index++;
    }
}