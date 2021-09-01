import Menu from "../menu/menu.js";

export default class Factory {
    constructor() {
        this.menu = new Menu();
            
    }

    init() {
        this.menu.init();
    }
}
