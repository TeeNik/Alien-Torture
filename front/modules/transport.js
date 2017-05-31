export default class Transport {
    constructor() {
        if(Transport._instance) {

        }
        Transport._instance = this;


        const address = ['https', 'https:'].includes(location.protocol) ? `wss://${location.host}/game`
            : `ws://${location.host}/game`;

        this.ws = new WebSocket(address);
        this.ws.onopen = function (event) {
            console.log(`WebSocket on address ${address} opened`);

            console.dir(this.ws);

            this.ws.onmessage = this.handleMessage.bind(this);
            const interval = this.interval = setInterval(() => this.ws.send('update'), 10 * 1000);

            this.ws.onclose = function () {
                clearInterval(interval);
            };
        }.bind(this);

    }

    static handleMessage(event) {
        const messageText = event.data;
        const message = JSON.parse(messageText);
        console.log(message);


        //this.mediator.emit(message.type, message.payload);
    }

    send(type, payload) {
        this.ws.send(JSON.stringify({type, payload}));
    }

    static initialize() {
        new Transport;
    }


}
