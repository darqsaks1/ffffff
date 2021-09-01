import {createElement } from "../../helpers.js";
import cards from "../../data/cards.js";
import Menu from "../menu/menu.js";

export default class renderTrain {
    constructor() {
        this.trainContainer = createElement("div", "trainContainer");
        this.main = document.querySelector(".main");
        this.BackButton = createElement("div", "backButton");
        this.main.append(this.BackButton);
        this.main.append(this.trainContainer);
    }

    onRenderCards(lang) {
        for (let i = 0; i < cards[lang].length; i += 1) {
            this.flipCard = createElement("div", "flip-card");
            this.flipCardInner = createElement("div", "flip-card-inner");
            this.flipCardFront = createElement("div", "flip-card-front");
            this.imgAvatar = createElement("img", "imgAvatar");
            this.imgAvatar.src = cards[lang][i].img;
            this.imgAvatarFront = createElement("img", "imgAvatar");
            this.imgAvatarFront.src = cards[lang][i].img;
            this.flipCardBack = createElement("div", "flip-card-back");
            this.belText = createElement("div", "belText");
            this.belText.innerHTML = cards[lang][i].translation;
            this.gemText = createElement("div", "gemText");
            this.gemText.innerHTML = cards[lang][i].word;
            this.flipCardFront.append(this.imgAvatarFront);
            this.flipCardFront.append(this.gemText);
            this.flipCardBack.append(this.imgAvatar);
            this.flipCardBack.append(this.belText);
            this.flipCardInner.append(this.flipCardFront);
            this.flipCardInner.append(this.flipCardBack);
            this.flipCard.append(this.flipCardInner);
            this.trainContainer.append(this.flipCard);
        }
    }

    onClickBackButton() {
        this.BackButton.addEventListener("click", () => {
            this.trainContainer.remove();
            this.BackButton.remove();
            this.menu = new Menu();
            this.menu.init();
        });
    }

    init(lang) {
        this.onRenderCards(lang);
        this.onClickBackButton();
    }
}
