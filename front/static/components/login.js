import baseComponent from './baseComponent'

export default class Login extends baseComponent {
    render(renderTemplate) {
        this.content.innerHTML = renderTemplate;
    }

    on(type, callback) {
        this.content.addEventListener(type, callback);
    }
}
