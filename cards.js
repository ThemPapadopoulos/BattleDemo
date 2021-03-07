//! card array
const cards = ["attack", "slash", "block", "run", "steal", "fortify"];

//! global variables
var card1 = document.querySelector("#card1");
var card2 = document.querySelector("#card2");
var card3 = document.querySelector("#card3");
var cardInfo1 = document.querySelector("#cardInfo1");
var cardInfo2 = document.querySelector("#cardInfo2");
var cardInfo3 = document.querySelector("#cardInfo3");
movesLeft.innerText = 2;

//! ---------call random card function at start------------
randomCards();
//! random card selector
//! card creator
function randomCards() {
  //!   card header text variables
  cardtext1 = document.querySelector("#card1");
  cardtext2 = document.querySelector("#card2");
  cardtext3 = document.querySelector("#card3");

  //! random card selector variables
  let randomCardNum = Math.floor(Math.random() * 6);
  let randomCardNum2 = Math.floor(Math.random() * 6);
  let randomCardNum3 = Math.floor(Math.random() * 6);

  //!  random card name variables
  var card1class = cards[randomCardNum];
  var card2class = cards[randomCardNum2];
  var card3class = cards[randomCardNum3];

  //! add class & text to random cards
  card1.classList.add(card1class);
  cardInfo1.classList.add("cardInfo");
  cardInfo1.style.cssText +=
    "background-image:url(./images/cardInfo/" + card1class + ".png)";
  cardtext1.innerHTML += card1class.toUpperCase();

  card2.classList.add(card2class);
  cardInfo2.classList.add("cardInfo");
  cardInfo2.style.cssText +=
    "background-image:url(./images/cardInfo/" + card2class + ".png)";
  cardtext2.innerHTML += card2class.toUpperCase();

  card3.classList.add(card3class);
  cardInfo3.classList.add("cardInfo");
  cardInfo3.style.cssText +=
    "background-image:url(./images/cardInfo/" + card3class + ".png)";
  cardtext3.innerHTML += card3class.toUpperCase();
}