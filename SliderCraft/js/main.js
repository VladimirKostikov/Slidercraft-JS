import elementExist from './helpers/elementExist.js';
import prepareElement from './helpers/prepareElement.js';
import renderElement from './helpers/renderElement.js';
import countSlidesInElement from './helpers/countSlidesInElement.js';
import renderArrows from './helpers/renderArrows.js';


class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
}

export default class SliderCraft {

    options = {
        width: "520px",
        height: "280px",
        start: 0,
        timer: 3000,
        arrows: true,
        menu: true,
        menuPosition: 'bottom-center',
        animation: "none"
    }

    slide = this.options.start;

    constructor(element, params) {
        this.element = element;
        this.slides = countSlidesInElement(this.element);
        this.init();
    }

    init() {
        if(!this.element) {
            throw new ValidationError("Error. Element not specified");
        }
        else {
            if(!elementExist(this.element))
                throw new ValidationError("Error. Element not exist");
            else {
                prepareElement(this.element, this.options.width, this.options.height);
                renderElement(this.element, this.options.start);
                renderArrows(this.element);

                this.play();
            }
        }
    }


    nextSlide() {

    }

    previousSlide() {

    }

    play() {
        setInterval(() => {
            if(this.slide + 1  != this.slides) {
                this.slide++;
                renderElement(this.element, this.slide);
            }
            else {
                this.slide = 0;
                renderElement(this.element, this.slide);
            }
        }, this.options.timer);
    }

    goSlide(slide) {
        this.slide = slide;
    }
}
