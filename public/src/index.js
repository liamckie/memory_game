document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        },
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        }
    ]

    cards.sort(() => 0.5 - Math.random());
    console.log(cards);

    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector("#result");
    let cardsChosen = [];
    let cardsChosenIds = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cards.length; i++) {
          const card = document.createElement("img");
          card.setAttribute("src", "src/images/blank.png");
          card.addEventListener("click", flipCard);
          card.setAttribute("data-id", i);
          grid.appendChild(card);
        }
    }
    
    function flipCard() {
        let cardId = this.getAttribute("data-id");
        cardsChosen.push(cards[cardId].name);
        cardsChosenIds.push(cardId);
        this.setAttribute("src", cards[cardId].img);

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
        console.log(cardsChosen);
    }

    function checkForMatch() {
        const allCards = document.querySelectorAll("img");
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];

        if (cardsChosenIds[0] == cardsChosenIds[1]) {
            alert("You have clicked the same image!");
            allCards[optionOneId].setAttribute("src", "src/images/blank.png");
            allCards[optionTwoId].setAttribute("src", "src/images/blank.png");
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert("You have found a match!");
            allCards[optionOneId].setAttribute("src", "src/images/white.png");
            allCards[optionTwoId].setAttribute("src", "src/images/white.png");
            allCards[optionOneId].removeEventListener("click", flipCard);
            allCards[optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen);
        } else {
            allCards[optionOneId].setAttribute("src", "src/images/blank.png");
            allCards[optionTwoId].setAttribute("src", "src/images/blank.png");
            alert("Sorry, try again!");
        }

        cardsChosen = [];
        cardsChosenIds = [];
        resultDisplay.textContent = cardsWon.length;

        if (cardsWon.length === cards.length / 2) {
            resultDisplay.textContent = "Congratulations! You have Won!";
        }

        console.log(cardsChosen);
        console.log(cardsWon);
    }

    createBoard();

})