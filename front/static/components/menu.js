import baseComponent from './baseComponent'

export default class Menu extends baseComponent {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}

