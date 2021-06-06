import { Bottle } from "./bottles.js";
import { Screen } from "./screen.js";
import messages from "./messages.js";

export class App {
    constructor () {
        this.screen = new Screen();
        this.bottles = [];
        messages.forEach(m => {
            this.bottles.push(new Bottle(m.message,m.author));
        });
    };

    init = () => { this.screen.init(this.bottles) };

    resize = () => { this.screen.resize(this.bottles) };
}