class FormHandler {
    ERROR_MESSAGE_DISPLAY_DURATION = 5000

    selectors = {
        form: '[data-js-form]',
        formSubmit: '[data-js-form-submit]',
        errorMessage: '[data-js-error-message]'
    }

    constructor() {
        this.formElement = document.querySelector(this.selectors.form)
        this.formSubmitElement = document.querySelector(this.selectors.formSubmit)
        this.errorMessageElement = document.querySelector(this.selectors.errorMessage)
        this.bindEvents()
    }

    onFormSubmit = () => {
        if (!this.formElement.checkValidity()) {
            this.errorMessageElement.style.display = 'block'

            setTimeout(() => {
                this.errorMessageElement.style.display = 'none'
            }, this.ERROR_MESSAGE_DISPLAY_DURATION)
        }
    }

    bindEvents() {
        this.formSubmitElement.addEventListener('click', this.onFormSubmit)
    }
}

export default FormHandler