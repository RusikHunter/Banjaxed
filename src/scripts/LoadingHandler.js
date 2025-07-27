class LoadingHandler {
    selectors = {
        body: "[data-js-body]"
    }

    constructor() {
        this.bodyElement = document.querySelector(this.selectors.body)
        this.bindEvents()
    }

    onLoadedWindow = () => {
        this.bodyElement.style.display = "block"
    }

    bindEvents() {
        window.addEventListener('load', this.onLoadedWindow)
    }
}

export default LoadingHandler