import baseComponent from './baseComponent'

export default class GameMode extends baseComponent {
    render (renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }
}
