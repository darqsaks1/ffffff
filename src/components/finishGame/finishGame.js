import Menu from "../menu/menu.js";

export default class finishGame {
    constructor() {
        this.container = document.querySelector(".container");
        this.newGameButton = document.createElement("div");
        this.newGameButton.classList.add("playButtonClassWin");
        this.newGameButton.innerHTML = "Новая гульня";
    }

    removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    failGame(count) {
        this.removeAllChildNodes(this.container);
        this.lose = document.createElement("div");
        this.lose.classList.add("winMessage");
        this.container.append(this.lose);
        this.lose.innerHTML = "Нажаль, вы не выгралі, паспрабуйце згуляць зноў";
        this.errorAmount = document.createElement("div");
        this.errorAmount.classList.add("winMessage");
        this.errorAmount.innerHTML = `Колькасьць памылак: ${count}`;
        this.container.append(this.errorAmount);
        this.winImage = document.createElement("div");
        this.winImage.classList.add("winImage");
        this.container.append(this.winImage);
        this.resetGame();
    }

    winGame() {
        this.removeAllChildNodes(this.container);
        this.win = document.createElement("div");
        this.win.classList.add("winMessage");
        this.container.append(this.win);
        this.win.innerHTML = "Віншую! Вы выгралі!";
        this.winImage = document.createElement("div");
        this.winImage.classList.add("winImage");
        this.container.append(this.winImage);
        this.resetGame();
    }

    resetGame() {
        this.container.append(this.newGameButton);
        this.newGameButton.addEventListener("click", () => {
            this.container.remove();
            this.menu = new Menu();
            this.menu.init();
        });
    }
}
