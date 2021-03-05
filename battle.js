//! Global selectors
var main = document.querySelector(".main");
var enemy = document.querySelector(".enemy");
var endTurnBtn = document.querySelector("#turnbtn");
var heroTalk = document.querySelector(".heroTalk");
var heroPortrait = document.querySelector(".heroPortrait");
var enemyTalk = document.querySelector(".enemyTalk");
var movesLeft = document.querySelector("#headerSpan");
var messages = document.querySelector("#winloosescreen");
var eHealth = document.querySelector("#eHealth");
var cardInfo1 = document.querySelector("#cardInfo1");
var cardInfo2 = document.querySelector("#cardInfo2");
var cardInfo3 = document.querySelector("#cardInfo3");

//! enemy creator
createEnemy("bandit", "100");
function createEnemy(enemyType, health) {
  enemy.style.background = "url(./images/enemy/" + enemyType + ".gif)";
  enemy.setAttribute("id", enemyType);
  enemy.style.cssText +=
    "background-size: 110px 110px;width: 110px;height: 120px;background-repeat: no-repeat;background-position: center;";
  eHealth.setAttribute('max',health);
  eHealth.setAttribute('value',health);
}

//! battlefield randomizer
battleCreator(1, "welcome to your first battle", '"You\'re mine!"', bandit);
heroTalk.innerHTML = '"attack!"';

//!random battle background generator
function battleCreator(battleId, introText, enemyText, enemyType) {
  var randomNum = Math.floor(Math.random() * 8 + 1);
  //main.style.display='none';
  main.setAttribute("id", battleId);
  main.style.background = "url(./images/backgrounds/" + randomNum + ".gif)";
  enemyTalk.innerHTML = enemyText;
  main.style.cssText +=
    "height: 500px;top:30px;width: 700px;background-size: 750px 500px;background-repeat: no-repeat;align-self: center;position: absolute;";
}

//! what happens when endTurn is pressed
endTurnBtn.addEventListener("click", function () {
  movesLeft.innerText = 2; //reset moves left counter
  messages.innerHTML = ""; //reset 'no moves left' message
  card1.classList.remove("attack", "block", "fortify", "slash", "run", "steal");
  card2.classList.remove("attack", "block", "fortify", "slash", "run", "steal");
  card3.classList.remove("attack", "block", "fortify", "slash", "run", "steal");
  card1.innerText = "";
  card2.innerText = "";
  card3.innerText = "";
  card1.style.pointerEvents = "initial";
  card2.style.pointerEvents = "initial";
  card3.style.pointerEvents = "initial";
  attack = "attack";
  randomEnemyQuote();
  randomCards();
});


//! RANDOM QUOTE GENERATOR ON ATTACK!

function randomHeroQuote() {
  heroQuotes = [
    '"En guard!"',
    '"You\'re gonna regret this!"',
    '"Let me go!"',
    '"Scum of the earth!"',
    '"You should run"',
    '"Not feeling good"',
  ];
  let randomNum = Math.floor(Math.random() * 6);
  q = heroQuotes[randomNum];
  heroTalk.innerHTML = q;
  heroTalk.style.display = "initial";
  heroPortrait.style.display = "initial"; //! portrait arrears
  // quote removal after 1,5 seconds
  setTimeout(function () {
    heroTalk.style.display = "none";
    heroPortrait.style.display = "none"; //! portrait disarrears
  }, 1500);
}
function randomEnemyQuote() {
  enemyQuotes = [
    '"Gimme all you money!"',
    '"You\'re dead!"',
    '"No way out!"',
    '"Try to block this"',
    '"You should run"',
    '"It hurts, does it?"',
  ];
  let randomNum = Math.floor(Math.random() * 6);
  q = enemyQuotes[randomNum];
  enemyTalk.innerHTML = q;
  enemyTalk.style.display = "initial";

  // quote removal after 1,5 seconds
  setTimeout(function () {
    enemyTalk.style.display = "none";
  }, 1500);
}
//!  on card-click --- movement
