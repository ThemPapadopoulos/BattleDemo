//! what happens when you click on any card

var cardsAll = document.querySelectorAll(".card");
var hero=document.querySelector('#hero');

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
          hero.classList.toggle("heroFortify");
            setTimeout(function () {
            hero.classList.toggle("heroFortify");
            },2000)
        }
      } else if (this.classList.contains("steal")) {
        while (movesLeft.innerText == 2) {
          this.classList = "card";
          this.innerHTML = "USED";
          this.style.pointerEvents = "none";
          randomHeroQuote();
          movesLeft.innerText -= 2;
            hero.classList.toggle("heroSteal");
            setTimeout(function () {
            hero.classList.toggle("heroSteal");
            },2000)
        }

      //! 1 point cost cards       
      } else if (this.classList.contains("attack")) {
        this.classList = "card";
        this.innerHTML = "USED";
        this.style.pointerEvents = "none";
        randomHeroQuote();
        movesLeft.innerText -= 1;
        hero.classList.toggle("heroAttack");
            setTimeout(function () {
            hero.classList.toggle("heroAttack");
            },2000)
      } else if (this.classList.contains("block")) {
        this.classList = "card";
        this.innerHTML = "USED";
        this.style.pointerEvents = "none";
        randomHeroQuote();
        movesLeft.innerText -= 1;
        hero.classList.toggle("heroBlock");
            setTimeout(function () {
            hero.classList.toggle("heroBlock");
            },5000)
      } else if (this.classList.contains("slash")) {
            this.classList = "card";
            this.innerHTML = "USED";
            this.style.pointerEvents = "none";
            randomHeroQuote();
            movesLeft.innerText -= 1;
            hero.classList.toggle("heroSlash");
            setTimeout(function () {
            hero.classList.toggle("heroSlash");
            },2000)
      } else if (this.classList.contains("run")) {
            randomHeroQuote();
            this.classList = "card";
            this.innerHTML = "USED";
            this.style.pointerEvents = "none";
            movesLeft.innerText -= 1;
            setTimeout(function () {
            hero.classList.toggle("heroRun");
            },1500)
            setTimeout(function () {
            hero.classList.toggle("heroRun");
            },3500)
      }
    }
  });
});
