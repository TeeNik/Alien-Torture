import baseComponent from './baseComponent'

export default class Rating extends baseComponent {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}


