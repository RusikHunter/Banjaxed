class ConversationsAnimationHandler {
    selectors = {
        average: '[data-js-average-column]',
        exceptional: '[data-js-exceptional-column]'
    }

    attributes = {
        average: 'data-js-average-column',
        exceptional: 'data-js-exceptional-column'
    }

    animations = {
        averageShow: 'average-show',
        exceptionalShow: 'exceptional-show'
    }

    constructor() {
        this.averageElement = document.querySelector(this.selectors.average)
        this.exceptionalElement = document.querySelector(this.selectors.exceptional)
        this.animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.hasAttribute(this.attributes.average)) {
                        entry.target.style.animationName = this.animations.averageShow
                    } else if (entry.target.hasAttribute(this.attributes.exceptional)) {
                        entry.target.style.animationName = this.animations.exceptionalShow
                    }
                    observer.unobserve(entry.target)
                }
            })
        }, {
            threshold: 0.5
        })
        this.bindEvents()
    }

    bindEvents() {
        this.animationObserver.observe(this.averageElement)
        this.animationObserver.observe(this.exceptionalElement)
    }
}

export default ConversationsAnimationHandler