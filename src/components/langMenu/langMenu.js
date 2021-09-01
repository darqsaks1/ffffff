import { createElement } from "../../helpers";
import RenderCards from "../rendercards/rendercards";
import playGame from "../playgame/playGame.js";
import renderTrain from "../renderTrain/renderTrain.js";
import Menu from "../menu/menu.js";

export default class langMenu {
    constructor() {
        this.langMenuContainer = createElement("div", "menuContainer");
        this.main = document.querySelector(".main");
        this.main.append(this.langMenuContainer);
        this.BackButton = createElement("div", "backButton");
        this.langMenuContainer.append(this.BackButton);
    }

    renderLangMenu() {
        this.title = createElement("h3", "title");
        this.title.innerHTML = "Абярыце мову";
        this.langMenuContainer.append(this.title);
        this.linksContainer = createElement("div", "linksContainer");
        this.langMenuContainer.append(this.linksContainer);
        this.german = createElement("div", "german");
        this.english = createElement("div", "english");
        this.linksContainer.append(this.german);
        this.linksContainer.append(this.english);
        this.german.innerHTML = "Deutsch";
        this.english.innerHTML = "Englisch";
    }

    onStartGerman(mode) {
        this.german.addEventListener("click", () => {
            if (mode === "game") {
                this.rendercards = new RenderCards();
                this.playGame = new playGame();
                this.rendercards.init(0);
                this.playGame.init(0);
            } else {
                this.renderTrain = new renderTrain();
                this.renderTrain.init(0);
            }
            this.langMenuContainer.remove();
        });
    }

    OnStartEnglish(mode) {
        this.english.addEventListener("click", () => {
            if (mode === "game") {
                this.rendercards = new RenderCards();
                this.playGame = new playGame();
                this.rendercards.init(1);
                this.playGame.init(1);
            } else {
                this.renderTrain = new renderTrain();
                this.renderTrain.init(1);
            }
            this.langMenuContainer.remove();
        });
    }

    onClickBackButton() {
        this.BackButton.addEventListener("click", () => {
            this.langMenuContainer.remove();
            this.BackButton.remove();
            this.menu = new Menu();
            this.menu.init();
        });
    }

    init(mode) {
        this.renderLangMenu();
        this.onStartGerman(mode);
        this.OnStartEnglish(mode);
        this.onClickBackButton();
    }
}
