import elementExist from './helpers/elementExist.js';


class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
}

export default class SliderCraft {
    slide = 0;
    slides;


    constructor(element, params) {
        this.element = element;
        this.init();
    }

    init() {
        if(!this.element) {
            throw new ValidationError("Error. Element not specified");
        }
        else {
            if(!elementExist(this.element))
                throw new ValidationError("Error. Element not exist");
            else
                console.log('all good');
        }
    }


    nextSlide() {

    }

    previousSlide() {

    }
}
