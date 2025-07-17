class TabClickHandler {
    selectors = {
        textWrap: '[data-js-industries-text-wrap]',
        contentButton: '[data-js-industries-content-button]'
    }

    attributes = {
        contentButton: 'data-js-industries-content-button'
    }

    textContent = {
        health: `Whatever your industry, we are here to serve you. Nonprofit and for-profit
        businesses alike can benefit from having a customized Salesforce experience.
        <span class="industries__text--bold">Health</span>,
        law, education, finance, technology, real estate and sales divisions can all take
        full advantage of their Salesforce investment with Banjaxed Solutions.`,
        law: `In the legal world, precision and efficiency are paramount. Whether managing client cases, streamlining compliance, or optimizing internal workflows, our tailored Salesforce solutions empower <span class="industries__text--bold">Law</span> firms to stay organized, responsive, and competitive. With Banjaxed Solutions, you can focus on delivering justice while we handle the logistics.`,
        education: `<span class="industries__text--bold">Education</span> is about more than teaching—it’s about building connections and shaping futures. Our Salesforce solutions help educational institutions enhance student engagement, simplify admissions, and support faculty collaboration. From classrooms to campuses, Banjaxed Solutions enables you to create a seamless, personalized learning experience.`
    }

    constructor() {
        this.textWrapElement = document.querySelector(this.selectors.textWrap)
        this.contentButtonElements = document.querySelectorAll(this.selectors.contentButton)
        this.bindEvents()
    }

    setText = (currentText) => {
        const textElementToInsert = document.createElement('p')
        textElementToInsert.classList.add('industries__text')
        textElementToInsert.insertAdjacentHTML('beforeend', this.textContent[currentText])

        this.textWrapElement.replaceChildren(textElementToInsert)
    }

    bindEvents() {
        this.contentButtonElements.forEach(buttonElement => {
            buttonElement.addEventListener('click', () => {
                const text = buttonElement.getAttribute(this.attributes.contentButton)
                this.setText(text)
            })
        })
    }
}

export default TabClickHandler