// variables
let fas = [...document.getElementsByClassName('fas')],
list = [...document.getElementsByClassName("list")],
mainCard = [...document.getElementsByClassName("card")],
cards = [...document.getElementsByClassName("cards")],
opend = [...document.getElementsByClassName("open")],
rating = [...document.getElementsByClassName("rates")],
movehml = [...document.getElementsByClassName('moves')],
numMistakes = [],
stopTimer,
moves = 1,
numCardOpend = [];

console.log(rating[0].children[0]);

(function mainFunc() {
list.forEach(function (item) {
  item.addEventListener("click", addToArray);
});
})();


function addToArray() {
  numCardOpend.push(this);
  movehml[0].innerHTML = moves++ + " moves ";
  this.children[0].classList.add("open");
    if(moves === 2) clock();
    if (numCardOpend.length === 2) compare();
    if ((opend.length * 2) === list.length) rate();
}
// Timer

var myTimer;
function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 0;

  function myClock() {
    document.getElementsByClassName("time")[0].innerHTML = ++c + " second";
  }

}

// shuffle
// these two function will shuffle(mix) all cards

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function randomCards() {
  shuffle(list); // shuffle cards
   cards[0].innerHTML = ""; // clear all list
   /*list.forEach(function (item) { // put shuffle cards
     cards[0].appendChild(item);
   });*/
   var shuf = [];
   for (var i = 0; i < list.length; i++) {
     cards[0].appendChild(list[i]);
   }
   
}

randomCards();

// compare 
// this function will compare between cards
function compare() {
  // do this if the same card
  if (numCardOpend[0].innerHTML === numCardOpend[1].innerHTML) {
  numCardOpend[0].children[0].parentNode.classList.add("open", "backcolor");
  numCardOpend[1].children[0].parentNode.classList.add("open", "backcolor");
  opend.push(this);
  numCardOpend.length = 0;
  // do this if not the same card
  } else if (numCardOpend[0].innerHTML !== numCardOpend[1].innerHTML) {
  numMistakes.push(this);
  setTimeout(function () {
    numCardOpend[0].children[0].classList.remove("open");
    numCardOpend[1].children[0].classList.remove("open");
    numCardOpend.length = 0;
  }, 400);
  }

}

// this function will work if all cards opened 
function rate() {
  clearInterval(myTimer);
        if (numMistakes.length <= 3) {
          rating[0].children[0].classList.add("ratesJs");
          rating[0].children[1].classList.add("ratesJs");
          rating[0].children[2].classList.add("ratesJs");
      } else if (4 < numMistakes.length && numMistakes.length < 10) {
        rating[0].children[0].classList.add("ratesJs");
        rating[0].children[1].classList.add("ratesJs");
      } else if (numMistakes.length > 10) {
        rating[0].children[0].classList.add("ratesJs");
      }
}

// this function will reload the page in all browsers
function realodPage() {
  window.location.replace(window.location.pathname + window.location.search + window.location.hash);
}
