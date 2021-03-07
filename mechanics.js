//! what happens when you click on any card

var goldValue = parseInt(document.querySelector("#goldValue").innerHTML);
var cardsAll = document.querySelectorAll(".card");
var playerStatus = document.querySelector("#playerStatus");
var hero = document.querySelector("#hero");

cardsAll.forEach((element) => {
  element.addEventListener("click", function () {
    //!---------- first check moves left -----------
    if (movesLeft.innerText == 0 && messages.innerHTML == "") {
      messages.innerHTML += "<h1>No moves left!</h1>";
    } else if (movesLeft.innerText > 0) {
      //!----------- then check clicked card (=>6 on total)cost -----------------
      //! 2 point cost cards
      if (this.classList.contains("fortify")) {
        while (movesLeft.innerText == 2) {
          this.classList = "card";
          this.innerHTML = "USED";
          this.style.pointerEvents = "none";
          randomHeroQuote();
          movesLeft.innerText -= 2;
fortifyCounter=2;
          hero.classList.toggle("heroFortify"); 
          setTimeout(function () {
            hero.classList.toggle("heroFortify");
            playerStatus.classList.toggle("fortified");
            playerStatus.innerHTML = "100";
          }, 2000);
        }
      } else if (this.classList.contains("steal")) {
        while (movesLeft.innerText == 2) {
          this.classList = "card";
          this.innerHTML = "USED";
          this.style.pointerEvents = "none";
          randomHeroQuote();

          if (eHealth.value > 0) {
            setTimeout(function () {
              eHealth.value -= 10; // enemy health reduction
              goldValue += 10;
              console.log(goldValue);
              document.querySelector("#goldValue").innerHTML = goldValue;
            }, 1500);
          } else if (eHealth.value == 10) {
            eHealth.value -= 10;
            makeUnclickable();
            enemyDeath(); //!  enemyDeath
          }
          movesLeft.innerText -= 2;
          hero.classList.toggle("heroSteal");
          setTimeout(function () {
            hero.classList.toggle("heroSteal");
          }, 2000);
        }

        //! 1 point cost cards
      } else if (this.classList.contains("attack")) {
        this.classList = "card";
        this.innerHTML = "USED";
        this.style.pointerEvents = "none";
        randomHeroQuote();

        if (eHealth.value > 25) {
          setTimeout(function () {
            eHealth.value -= 25; // enemy health reduction
          }, 1500);
        } else if (eHealth.value <= 25) {
          eHealth.value -= 25;
          makeUnclickable();
          enemyDeath(); //!  enemyDeath
        }
        movesLeft.innerText -= 1;
        hero.classList.toggle("heroAttack");
        setTimeout(function () {
          hero.classList.toggle("heroAttack");
        }, 2000);
      } else if (this.classList.contains("block")) {
        this.classList = "card";
        this.innerHTML = "USED";
        //!------ toggle blocked class -------
        playerStatus.classList.toggle("blocked");
        playerStatus.innerHTML = "50";
        this.style.pointerEvents = "none";
        randomHeroQuote();
        movesLeft.innerText -= 1;
        hero.classList.toggle("heroBlock");
        setTimeout(function () {
          hero.classList.toggle("heroBlock");
        }, 5000);
      } else if (this.classList.contains("slash")) {
        this.classList = "card";
        this.innerHTML = "USED";
        this.style.pointerEvents = "none";
        randomHeroQuote();

        if (eHealth.value > 15) {
          setTimeout(function () {
            eHealth.value -= 15; // enemy health reduction
            playerStatus.classList.toggle('defense');
            playerStatus.innerHTML=20;
          }, 1500);
        } else if (eHealth.value <= 15) {
          eHealth.value -= 15;
          makeUnclickable();
          enemyDeath(); //!  enemyDeath
        }
        movesLeft.innerText -= 1;
        hero.classList.toggle("heroSlash");
        setTimeout(function () {
          hero.classList.toggle("heroSlash");
        }, 2000);
      } else if (this.classList.contains("run")) {
        randomHeroQuote();
        this.classList = "card";
        this.innerHTML = "USED";
        this.style.pointerEvents = "none";
        movesLeft.innerText -= 1;
        randomRun= Math.floor(Math.random()*5+1);
        
        setTimeout(function () {
          hero.classList.toggle("heroRun");
   if (randomRun==1 || randomRun==4 || randomRun==6){
            setTimeout(function () {
            messages.style.display = "initial";
            messages.innerHTML = "<h1>You succesfully escape the battle!</h1>";
            makeUnclickable();
            main.style.cssText = "";
            //! add gameover screen
           main.classList.add("gameover");
            },1000)
          }else{
            setTimeout(function () {
              messages.style.display = "initial";
              messages.innerHTML = "<h1>You failed to escape!</h1>";
              },1000);
            setTimeout(function () { 
              hero.classList.toggle("heroRun");
            }, 3000);
          };
        }, 1500);
      }
      
    }
  });
});