import reviews from "./reviews.json" assert { type: "json" }

class SliderReviewHandler {
    MAX_RATING = 5

    selectors = {
        buttonNext: "[data-js-slider-review-button-next]",
        buttonRadio: "[data-js-slider-review-radio]",
        slideWrap: "[data-js-slide-wrap]",
        slide: "[data-js-slide]"
    }

    attributes = {
        buttonRadio: "data-js-slider-review-radio",
        slide: "data-js-slide"
    }

    stateClasses = {
        isActive: "review__label--active"
    }

    constructor() {
        this.buttonNextElement = document.querySelector(this.selectors.buttonNext)
        this.buttonRadioElements = document.querySelectorAll(this.selectors.buttonRadio)
        this.slideWrapElement = document.querySelector(this.selectors.slideWrap)
        this.slideElement = document.querySelector(this.selectors.slide)
        this.reviews = reviews

        this.currentSlide = 0

        this.bindEvents()
    }

    createSlide = () => {
        const review = this.reviews[this.currentSlide]

        this.slideElement.remove()

        const newSlide = document.createElement("div")
        newSlide.classList.add("review__slide")
        newSlide.setAttribute(this.attributes.slide, "")

        const ratingWrap = document.createElement("div")
        ratingWrap.classList.add("review__rating-wrap")

        const reviewStars = document.createElement("div")
        reviewStars.classList.add("review__stars")

        for (let i = 0; i < this.MAX_RATING; ++i) {
            const svgNamespace = "http://www.w3.org/2000/svg"
            const svgElement = document.createElementNS(svgNamespace, "svg")
            svgElement.classList.add("review__star")
            svgElement.setAttribute("width", "25")
            svgElement.setAttribute("height", "25")
            svgElement.setAttribute("viewBox", "0 0 25 25")
            svgElement.setAttribute("fill", "currentColor")

            if (i >= review.rating) {
                svgElement.classList.add("review__star--gray")
            }

            const pathElement = document.createElementNS(svgNamespace, "path")
            pathElement.setAttribute("d", "M24.0031 9.05202C23.8009 8.44626 23.2897 8.01173 22.6702 7.91708L16.3811 6.97488L13.5502 0.965434C13.2688 0.369997 12.6932 0 12.047 0C11.4008 0 10.8251 0.369997 10.5438 0.965434L7.75416 6.95337L1.42377 7.91708C0.804241 8.01173 0.293989 8.44626 0.0909213 9.05202C-0.116449 9.67414 0.0367123 10.3487 0.491034 10.8125L5.06953 15.4986L3.98794 22.1035C3.88038 22.7634 4.14712 23.4096 4.68577 23.7891C5.20377 24.1565 5.86976 24.1926 6.4239 23.8872L12.0074 20.7689L17.6701 23.8872C18.2259 24.1926 18.8902 24.1548 19.4082 23.7891C19.9469 23.4096 20.2145 22.7634 20.106 22.1035L19.0227 15.49L23.603 10.8125C24.0573 10.3487 24.2104 9.67414 24.0031 9.05202Z")
            pathElement.setAttribute("fill", "#FFB800")

            svgElement.appendChild(pathElement)

            reviewStars.appendChild(svgElement)
        }

        const reviewRating = document.createElement("span")
        reviewRating.classList.add("review__rating")
        reviewRating.textContent = `(${review.rating}/5)`

        ratingWrap.appendChild(reviewStars)
        ratingWrap.appendChild(reviewRating)

        const reviewUsername = document.createElement("span")
        reviewUsername.classList.add("review__username")
        reviewUsername.textContent = review.username

        const reviewUserDetails = document.createElement("span")
        reviewUserDetails.classList.add("review__user-details")
        reviewUserDetails.textContent = review.userDetails

        const reviewText = document.createElement("p")
        reviewText.classList.add("review__text")
        reviewText.textContent = review.text

        newSlide.appendChild(ratingWrap)
        newSlide.appendChild(reviewUsername)
        newSlide.appendChild(reviewUserDetails)
        newSlide.appendChild(reviewText)

        return newSlide
    }

    showSlide = () => {
        this.slideElement.remove()

        this.buttonRadioElements.forEach(buttonRadio => {
            buttonRadio.classList.remove(this.stateClasses.isActive)
        })
        this.buttonRadioElements[this.currentSlide].classList.add(this.stateClasses.isActive)

        const newSlide = this.createSlide()
        this.slideElement = newSlide

        this.slideWrapElement.appendChild(newSlide)
    }

    showNextSlide = () => {
        this.currentSlide++

        if (this.currentSlide >= this.reviews.length) {
            this.currentSlide = 0
        }

        this.showSlide()
    }

    showCurrentSlide = (id) => {
        this.currentSlide = id

        this.showSlide()
    }

    bindEvents() {
        this.buttonNextElement.addEventListener("click", this.showNextSlide)

        this.buttonRadioElements.forEach(buttonRadio => {
            buttonRadio.addEventListener("click", () => {
                const id = buttonRadio.getAttribute(this.attributes.buttonRadio)
                this.showCurrentSlide(id)
            })
        })
    }
}

export default SliderReviewHandler