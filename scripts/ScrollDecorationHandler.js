class ScrollDecorationHandler {
    INDICATOR_CHANGE_HEIGHT_MULTIPLIER_UPPER = 0.7
    INDICATOR_CHANGE_HEIGHT_MULTIPLIER_LOWER = 0.3

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
        let activeIndicator = null

        this.scrollIndicatorElements.forEach(scrollIndicatorElement => {
            const rect = scrollIndicatorElement.getBoundingClientRect()

            const isWithinBounds = rect.top <= window.innerHeight * this.INDICATOR_CHANGE_HEIGHT_MULTIPLIER_UPPER &&
                rect.top >= window.innerHeight * this.INDICATOR_CHANGE_HEIGHT_MULTIPLIER_LOWER

            if (isWithinBounds) {
                activeIndicator = scrollIndicatorElement
            }
        })

        if (activeIndicator) {
            this.scrollIndicatorElements.forEach(element => element.classList.remove(this.stateClasses.isActive))
            activeIndicator.classList.add(this.stateClasses.isActive)
        }
    }

    bindEvents() {
        window.addEventListener("scroll", this.checkPosition, { passive: true })
    }
}

export default ScrollDecorationHandler