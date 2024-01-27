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
        width: "820px",
        height: "480px",
        start: 0,
        timer: 3000,
        arrows: true,
        menu: true,
        menuPosition: 'bottom-center',
        animation: "none"
    }

    slide = this.options.start;
    interval;

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
                renderArrows(this.element, this);

                this.play();
            }
        }
    }


    next() {
        if(this.slide + 1 != this.slides)
            this.slide++;
        else
            this.slide = 0;
        
        renderElement(this.element, this.slide);

        clearInterval(this.interval);
        this.play();
    }

    previous() {
        if(this.slide - 1 != -1)
            this.slide--;
        else
            this.slide = this.slides - 1;

        renderElement(this.element, this.slide);

        clearInterval(this.interval);
        this.play();
    }


    play() {
        this.interval = setInterval(() => {
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
