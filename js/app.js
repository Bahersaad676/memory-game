let fas = [...document.getElementsByClassName('fas')],
list = [...document.getElementsByClassName("list")],
cards = [...document.getElementsByClassName("cards")],
opend = [...document.getElementsByClassName("add")],
rating = [...document.getElementsByClassName("rating")],
numMistakes = [],
stopTimer,
numCardOpend = [];



// compare between cards

for (var i = 0; i < list.length; i++) {

  list[i].onclick = function addToArray() {
    numCardOpend.push(this);
    this.classList.add("add");

    if (numCardOpend.length === 2) {
      if (numCardOpend[0].innerHTML === numCardOpend[1].innerHTML) theSameCard();
      else if (numCardOpend[0].innerHTML !== numCardOpend[1].innerHTML) notSameCard();
    }
    if ((opend.length * 2) === list.length) {
        clearInterval(myTimer);
        if (numMistakes.length <= 3) {
          rating[0].children[0].classList.add("ratejs");
          rating[0].children[1].classList.add("ratejs");
          rating[0].children[2].classList.add("ratejs");
      } else if (4 < numMistakes.length && numMistakes.length < 10) {
        rating[0].children[0].classList.add("ratejs");
        rating[0].children[1].classList.add("ratejs");
      } else if (numMistakes.length > 10) {
        rating[0].children[0].classList.add("ratejs");
      }
    }

  }

}


// Timer 
var myTimer;
(function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 0;

  function myClock() {
    document.getElementById("demo").innerHTML = ++c;
  }

})();

// if they are the same card
function theSameCard() {
  numCardOpend[0].classList.add("add");
  numCardOpend[1].classList.add("add");
  opend.push(this);   
  numCardOpend.length = 0;
}

// if they are not the same card
function notSameCard() {
  numMistakes.push(this);
  setTimeout(function () {
    numCardOpend[0].classList.remove("add");
    numCardOpend[1].classList.remove("add");
    numCardOpend.length = 0;
  }, 600);
}

