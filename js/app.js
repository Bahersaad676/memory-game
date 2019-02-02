// variables
let fas = [...document.getElementsByClassName('fas')],
list = [...document.getElementsByClassName("list")],
cards = [...document.getElementsByClassName("cards")],
opend = [...document.getElementsByClassName("open")],
rating = [...document.getElementsByClassName("rating")],
numMistakes = [],
stopTimer,
numCardOpend = [];

(function mainFunc() {
  for (var i = 0; i < list.length; i++) {

  list[i].onclick = function addToArray() {
    numCardOpend.push(this);
    this.children[0].classList.add("open");
    if (numCardOpend.length === 2) compare();
    if ((opend.length * 2) === list.length) allOpenedCards();
  }
}
})();



// Timer
var myTimer;
(function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 0;

  function myClock() {
    document.getElementById("demo").innerHTML = ++c;
  }

})();

// shuffle
// these two function will shuffle(mix) all cards

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function randomCards() {
  shuffle(list); // shuffle cards
   cards[0].innerHTML = ""; // clear all list
   list.forEach(function (item) { // put shuffle cards
     cards[0].appendChild(item);
   });
   
}

randomCards();

// compare 
// this function will compare between cards
function compare() {
  // do this if the same card
  if (numCardOpend[0].innerHTML === numCardOpend[1].innerHTML) {
  numCardOpend[0].children[0].classList.add("open", "backcolor");
  numCardOpend[1].children[0].classList.add("open", "backcolor");
  opend.push(this);   
  numCardOpend.length = 0;
  // do this if not the same card
  } else if (numCardOpend[0].innerHTML !== numCardOpend[1].innerHTML) {
  numMistakes.push(this);
  setTimeout(function () {
    numCardOpend[0].children[0].classList.remove("open");
    numCardOpend[1].children[0].classList.remove("open");
    numCardOpend.length = 0;
  }, 600);
  }
}

// this function will work if all cards opened 
function allOpenedCards() {
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
