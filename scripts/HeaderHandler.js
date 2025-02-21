class HeaderHandler {
    MAX_MOBILE_VIEWPORT_WIDTH = 768
    BURGER_MENU_ANIMATION_DURATION = 400

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
            this.burgerMenuElement.style.animationName = 'burger-menu-open'
        } else {
            this.burgerMenuElement.style.animationName = 'burger-menu-close'

            // wait until the animation is finished, then close the burger menu

            setTimeout(() => {
                this.burgerMenuElement.close()
            }, this.BURGER_MENU_ANIMATION_DURATION)
        }
    }

    // The method is needed to hide/appear the burger menu
    // when changing the screen width in the browser devtools
    // without animation

    onWindowResize = () => {
        const isMobile = window.innerWidth <= this.MAX_MOBILE_VIEWPORT_WIDTH;

        if (isMobile && this.burgerButtonElement.classList.contains(this.stateClasses.isActive)) {
            this.burgerMenuElement.show()
            this.burgerMenuElement.style.animationName = ''
        }
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
        window.addEventListener('resize', this.onWindowResize);
    }
}

export default HeaderHandler