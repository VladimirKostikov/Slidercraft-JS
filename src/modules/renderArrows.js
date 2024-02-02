export default async function renderArrows(element, obj) {
    await fetch("/templates/arrowLeft.html")
        .then((response) => response.text())
        .then((html) => {
            document.querySelector(element).innerHTML += html;
        })
        .catch((error) => {
            console.warn(error);
        });

    await fetch("/templates/arrowRight.html")
        .then((response) => response.text())
        .then((html) => {
            document.querySelector(element).innerHTML += html;
        })
        .catch((error) => {
            console.warn(error);
        });


    let arrowLeft = document.getElementById('slidercraft-previous');
    let arrowLeftFunction = "previous";
    arrowLeft.addEventListener('click', () => {
        obj[arrowLeftFunction]();
    })

    let arrowRight = document.getElementById('slidercraft-next');
    let arrowRightFunction = "next";

    arrowRight.addEventListener('click', () => {
        obj[arrowRightFunction]();
    })

}