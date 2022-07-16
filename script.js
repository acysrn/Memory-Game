const cards = document.querySelectorAll(".memory-card");

let hasFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");
if (!hasFlipped) {
  hasFlipped = true;
  firstCard = this;
} else {
  hasFlipped = false;
  secondCard = this;

  checkForMatch();
  }
}

function checkForMatch() {
  if(firstCard.dataset.image === secondCard.dataset.image) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  } else {

    lockBoard = true; 

    setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    lockBoard = false; 

    }, 1000);
  }
  
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener("click", flipCard));

if(hasFlipped === cards.length) alert("YOU WIN!")