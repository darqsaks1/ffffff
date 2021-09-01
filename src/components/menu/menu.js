import {createElement} from "../../helpers";
import RenderCards from "../rendercards/rendercards";
import playGame from "../playgame/playGame";
import renderTrain from "../renderTrain/renderTrain";
import LangMenu from "../langMenu/langMenu";

export default class Menu {
    constructor() {
        this.game = "game";
        this.train = "train";
        this.menuContainer = createElement("div", "menuContainer");
        this.main = document.querySelector(".main");
        this.main.append(this.menuContainer);
    }

    renderMenu() {
        this.title = createElement("h3", "title");
        this.title.innerHTML = "Прыкладаньне для вывучэньня замежных моў";
        this.menuContainer.append(this.title);
        this.linksContainer = createElement("div", "linksContainer");
        this.menuContainer.append(this.linksContainer);
        this.trainLink = createElement("div", "trainLink");
        this.gameLink = createElement("div", "gameLink");
        this.linksContainer.append(this.trainLink);
        this.linksContainer.append(this.gameLink);
        this.trainLink.innerHTML = "Трэнавальны рэжым";
        this.gameLink.innerHTML = "Рэжым гульні";
    }

    startGameMode() {
        this.gameLink.addEventListener("click", () => {
            this.menuContainer.remove();
            // this.rendercards = new RenderCards();
            // this.playGame = new playGame();
            // this.rendercards.init();
            // this.playGame.init();
            this.langMenu = new LangMenu();
            this.langMenu.init(this.game);
        });
    }

    startTrainMode() {
        this.trainLink.addEventListener("click", () => {
            this.menuContainer.remove();
            // this.renderTrain = new renderTrain();
            // this.renderTrain.init();
            this.langMenu = new LangMenu();
            this.langMenu.init(this.train);
        });
    }

    init() {
        this.renderMenu();
        this.startGameMode();
        this.startTrainMode();
    }
}
