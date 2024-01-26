export default function renderArrows(element) {
    fetch("/SliderCraft/templates/arrowLeft.html")
    .then((response) => response.text())
    .then((html) => {
        document.querySelector(element).innerHTML += html;
    })
    .catch((error) => {
        console.warn(error);
    });

    fetch("/SliderCraft/templates/arrowRight.html")
    .then((response) => response.text())
    .then((html) => {
        document.querySelector(element).innerHTML += html;
    })
    .catch((error) => {
        console.warn(error);
    });
}