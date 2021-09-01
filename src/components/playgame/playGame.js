import cards from "../../data/cards.js";
import FinishGame from "../finishGame/finishGame.js";
import { createElement } from "../../helpers";

export default class PlayGame {
    constructor() {
        this.playButton = document.createElement("div");
        this.playButton.classList.add("playButtonClass");
        this.container = document.querySelector(".container");
        this.container.append(this.playButton);
        this.playButton.innerHTML = "Spielen";
        this.picsContainer = document.querySelectorAll("cardImage");
        this.audio = new Audio();
        this.audioArr = [];
        this.correctAudio = new Audio();
        this.wrongAudio = new Audio();
        this.playButtonRepeat = document.createElement("div");
        this.playButtonRepeat.classList.add("playButtonRepeatClass");
        this.errorCounter = 0;
        this.errorDiv = document.createElement("div");
        this.errorDiv.classList.add("errorCounter");
        this.errorDiv.innerHTML = `Fehler : ${this.errorCounter}`;
        this.finishGame = new FinishGame();
        this.span = document.createElement("div");
        this.span.classList.add("span");
        this.playButtonRepeat.append(this.span);
    }

    onPlayGame(lang) {
        this.picsContainer = document.querySelectorAll(".cardImage");
        for (let i = 0; i < cards[lang].length; i += 1) {
            this.playButton.addEventListener("click", () => {
                this.audioArr.push(cards[lang][i].audio);
                this.audioArr.sort(() => Math.random() - 0.5);
                this.audio.src = this.audioArr[0];
                this.audio.play();
                this.playButton.remove();
                this.container.append(this.errorDiv);
                this.container.append(this.playButtonRepeat);
            });
            this.playButtonRepeat.addEventListener("click", () => {
                this.audio.play();
            });
        }
    }

    chooseCard() {
        this.picsContainer.forEach((item) => {
            item.addEventListener("click", (event) => {
                this.currentTarget = event.target;
                if (this.audioArr[0].includes(item.alt)) {
                    this.correctAudio.src = "src/data/audio/success.mp3";
                    this.correctAudio.play();
                    this.audioArr.shift();
                    item.classList.add("usedCard");
                    this.audio.src = this.audioArr[0];
                    setTimeout(() => {
                        this.audio.play();
                    }, 1000);
                } else {
                    this.wrongAudio.src = "src/data/audio/fail.mp3";
                    this.wrongAudio.play();
                    this.errorDiv.innerHTML = `Errors:${this.errorCounter += 1}`;
                }
                this.onEndGame();
            });
        });
    }

    onEndGame() {
        if (!this.audioArr.length) {
         this.errorCounter
                ? this.finishGame.failGame(this.errorCounter)
                : this.finishGame.winGame();
        }
    }

    init(lang) {
        this.onPlayGame(lang);
        this.chooseCard();
    }
}
