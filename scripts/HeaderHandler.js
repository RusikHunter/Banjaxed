class HeaderHandler {
    selectors = {
        burgerButton: '[data-js-burger-button]',
        burgerMenu: '[data-js-burger-menu]'
    }

    stateClasses = {
        isActive: 'burger-button--active'
    }

    constructor() {
        this.burgerButtonElement = document.querySelector(this.selectors.burgerButton)
        this.burgerMenuElement = document.querySelector(this.selectors.burgerMenu)
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)

        if (!this.burgerMenuElement.open) {
            this.burgerMenuElement.show()
        } else {
            this.burgerMenuElement.close()
        }
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    }
}

export default HeaderHandler