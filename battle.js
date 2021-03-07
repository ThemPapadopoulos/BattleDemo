//! Global selectors
var fortifyCounter = 0;
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
  enemy.setAttribute("id", enemyType);
  enemy.classList.add("enIdle");
  eHealth.setAttribute("max", health);
  eHealth.setAttribute("value", health);
}
//! battlefield randomizer
battleCreator(1, "welcome to your first battle", '"You\'re mine!"', bandit);
heroTalk.innerHTML = '"attack!"';
//!random battle background generator
function battleCreator(battleId, introText, enemyText, enemyType) {
  var randomNum = Math.floor(Math.random() * 8 + 1);
  //main.style.display='none';
  main.setAttribute("id", battleId);
  main.style.background = "url(images/backgrounds/" + randomNum + ".gif)";
  enemyTalk.innerHTML = enemyText;
  main.style.cssText +=
    "height: 500px;top:30px;width: 700px;background-size: 750px 500px;background-repeat: no-repeat;align-self: center;position: absolute;";
  hero.classList.toggle("heroIdle");
}

//! what happens when END TURN is pressed
endTurnBtn.addEventListener("click", function () {
  enemyAttack();
  setTimeout(function () {
    movesLeft.innerText = 2; //reset moves left counter
    //!dont remove gameover message on endturn
    if (messages.innerHTML != "<h1>All hope is Lost... </h1>") {
      messages.innerHTML = ""; //reset 'no moves left' message
    }
    playerStatus.classList.remove('defense');
            playerStatus.innerHTML='';
    //! empty classes from cards
    card1.classList.remove(
      "attack",
      "block",
      "fortify",
      "slash",
      "run",
      "steal"
    );
    card2.classList.remove(
      "attack",
      "block",
      "fortify",
      "slash",
      "run",
      "steal"
    );
    card3.classList.remove(
      "attack",
      "block",
      "fortify",
      "slash",
      "run",
      "steal"
    );
    card1.innerText = "";
    card2.innerText = "";
    card3.innerText = "";
    attack = "attack";
    randomEnemyQuote();
    //! re-randomise cards.
    randomCards();
    if (playerStatus.classList.contains("blocked")) {
      playerStatus.classList.toggle("blocked");
    }
    playerStatus.innerHTML = "";
  }, 1500);
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

//!!!! ENEMY ATTACK FUNCTION !!!!
function enemyAttack() {
   //!-------check if fortified------
  if (playerStatus.classList.contains("fortified") && fortifyCounter > 0) {
    fortifyCounter -= 1;
    enemy.classList.remove("enIdle");
    enemy.classList.toggle("enAttack");
    messages.style.display = "initial";
    messages.innerHTML = "<h1>You completely avoid damage</h1>";
    makeClickable();
    setTimeout(function () {
      enemy.classList.toggle("enAttack");
    }, 1000);
  } else {
    makeClickable();
    if (playerStatus.classList.contains("fortified")) {
      //!remove fortified on fortifyCounter = 0
      fortifyCounter = 0;
      playerStatus.classList.toggle("fortified");
    }
    if (pHealth.value > 0) {
      enemy.classList.remove("enIdle");
      enemy.classList.toggle("enAttack");
      setTimeout(function () {
        if (pHealth.value > 25 && playerStatus.innerHTML != "50" && playerStatus.innerHTML != "20" ) {
          pHealth.value -= 25; // enemy health reduction
          hero.classList.toggle("heroBeingHit");
          setTimeout(function () {
            hero.classList.toggle("heroBeingHit");
          }, 1200);
          //! when bock class is on -50% damage.
        } else if (pHealth.value > 25 && playerStatus.innerHTML == "50") {
          pHealth.value -= 12.5;
        } //! when defence class is on -20% damage.
        else if (pHealth.value > 15 && playerStatus.innerHTML == "20") {
          pHealth.value -= 20;
        }else {
          //! ------- player death condition -------- 
          pHealth.value -= 25; // player health reduction
          playerDeath();
        }
      }, 1500);
      setTimeout(function () {
        enemy.classList.toggle("enAttack");
      }, 1500);
    }
  }
}
function playerDeath() {
  makeUnclickable();
  hero.classList.toggle("heroIdle");
  hero.style.cssText =
    "z-index: 1;position: absolute;background-repeat: no-repeat;background-position: center;background: url(images/hero/death2.gif);background-repeat: no-repeat;background-position: center;padding: 0;margin: 0;top: 330px;left: 100px;width: 150px;height: 110px;background-size: 200px 115px;filter: drop-shadow(-5px 3px 3px black);animation-duration: 3s;transition: 1s;transition-timing-function: ease-in-out;";
  //! gameover message appear
  messages.style.display = "initial";
  messages.innerHTML = "<h1>All hope is Lost... </h1>";
  main.style.cssText = "";
  //! add gameover screen
  main.classList.add("gameover");
}
function enemyDeath() {
  enemy.classList.toggle("heroIdle");
  makeUnclickable();
  enemy.style.cssText =
    "background-repeat: no-repeat;background-size: 200px 115px;background-position: center;top: 330px;left: 500px;display: block;color: white;font-size: x-large;font-weight: 900;position: absolute;filter: drop-shadow(5px 3px 3px black);background: url('images/enemy/banditDeath2.gif');display: block;width: 100;height: 120px;background-repeat: no-repeat;background-size: 120px 115px;background-position: center;";
  //! gameover message appear
  messages.style.display = "initial";
  messages.innerHTML = "<h1>Alas! You live another day.</h1>\n<h2>You gained "+ goldValue +" gold!</h2>";
  main.style.cssText = "";
  //! add gameover screen
  main.classList.add("gameover");
}
//! function to togle clickable cards & button
function makeUnclickable() {
  endTurnBtn.style.pointerEvents = "none";
  card1.style.pointerEvents = "none";
  card2.style.pointerEvents = "none";
  card3.style.pointerEvents = "none";
}
function makeClickable() {
  endTurnBtn.style.pointerEvents = "initial";
  card1.style.pointerEvents = "initial";
  card2.style.pointerEvents = "initial";
  card3.style.pointerEvents = "initial";
}