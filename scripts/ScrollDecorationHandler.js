class ScrollDecorationHandler {
    INDICATOR_CHANGE_HEIGHT_MULTIPLIER_UPPER = 0.6
    INDICATOR_CHANGE_HEIGHT_MULTIPLIER_LOWER = 0.4

    selectors = {
        scrollIndicator: "[data-js-scroll-indicator]"
    }

    stateClasses = {
        isActive: 'why__scroll-indicator--active'
    }

    constructor() {
        this.scrollIndicatorElements = document.querySelectorAll(this.selectors.scrollIndicator)
        this.bindEvents()
    }

    checkPosition = () => {
        this.scrollIndicatorElements.forEach(scrollIndicatorElement => {
            const rect = scrollIndicatorElement.getBoundingClientRect()

            if (rect.top <= window.innerHeight * this.INDICATOR_CHANGE_HEIGHT_MULTIPLIER_UPPER
                && rect.top >= window.innerHeight * this.INDICATOR_CHANGE_HEIGHT_MULTIPLIER_LOWER) {
                console.log('a')
                this.scrollIndicatorElements.forEach(scrollIndicatorElement => {
                    scrollIndicatorElement.classList.remove(this.stateClasses.isActive)
                })

                scrollIndicatorElement.classList.add(this.stateClasses.isActive)
            }
        })
    }

    bindEvents() {
        window.addEventListener("scroll", this.checkPosition)
    }
}

export default ScrollDecorationHandler