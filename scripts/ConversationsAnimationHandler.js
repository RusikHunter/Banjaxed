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
                        console.log('a')
                        entry.target.style.animationName = this.animations.averageShow
                    } else if (entry.target.hasAttribute(this.attributes.exceptional)) {
                        console.log('b')
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
        console.log('bind')
    }
}

export default ConversationsAnimationHandler