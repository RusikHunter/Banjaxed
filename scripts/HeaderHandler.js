class HeaderHandler {
    MAX_MOBILE_VIEWPORT_WIDTH = 768
    BURGER_MENU_ANIMATION_DURATION = 400

    selectors = {
        header: '[data-js-header]',
        burgerButton: '[data-js-burger-button]',
        burgerMenu: '[data-js-burger-menu]'
    }

    animations = {
        burgerMenuOpen: 'burger-menu-open',
        burgerMenuClose: 'burger-menu-close'
    }

    stateClasses = {
        isActive: 'burger-button--active',
        noAnimation: 'no-animation'
    }

    constructor() {
        this.headerElement = document.querySelector(this.selectors.header)
        this.burgerButtonElement = document.querySelector(this.selectors.burgerButton)
        this.burgerMenuElement = document.querySelector(this.selectors.burgerMenu)
        this.bindEvents()
    }

    onBurgerButtonClick = () => {
        this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)

        if (!this.burgerMenuElement.open) {
            this.burgerMenuElement.show()
            this.burgerMenuElement.style.animationName = this.animations.burgerMenuOpen
        } else {
            this.burgerMenuElement.style.animationName = this.animations.burgerMenuClose

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
        const isMobile = window.innerWidth <= this.MAX_MOBILE_VIEWPORT_WIDTH

        if (isMobile && this.burgerButtonElement.classList.contains(this.stateClasses.isActive)) {
            this.burgerMenuElement.show()
            this.burgerMenuElement.style.animationName = ''
        }
    }

    // method that disables animations from playing on
    // all header elements for the first few hundred milliseconds
    // after page load, because decorative elements on
    // navigation elements play unwanted animations on page load
    // due to style peculiarities

    disableAnimationOnLoading = () => {
        setTimeout(() => {
            this.headerElement.classList.remove(this.stateClasses.noAnimation)
        }, this.BURGER_MENU_ANIMATION_DURATION)
    }

    bindEvents() {
        this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
        window.addEventListener('resize', this.onWindowResize)
        this.disableAnimationOnLoading()
    }
}

export default HeaderHandler