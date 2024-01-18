const section = document.querySelector("section");
const playerLiverCount = document.querySelector("span");
let playerLives =5;

playerLiverCount.textContent = playerLives;

const getData = () => [
  { imgSrc: "./Images/card1.png", name: "card1" },
  { imgSrc: "./Images/card1.png", name: "card1" },
  { imgSrc: "./Images/card3.png", name: "card3" },
  { imgSrc: "./Images/card3.png", name: "card3" },
  { imgSrc: "./Images/card4.png", name: "card4" },
  { imgSrc: "./Images/card4.png", name: "card4" },
  { imgSrc: "./Images/card5.png", name: "card5" },
  { imgSrc: "./Images/card5.png", name: "card5" },
  { imgSrc: "./Images/card2.png", name: "card9" },
  { imgSrc: "./Images/card8.png", name: "card8" },
  { imgSrc: "./Images/card8.png", name: "card8" },
  { imgSrc: "./Images/main.png", name: "main" },
  { imgSrc: "./Images/main.png", name: "main" },
  { imgSrc: "./Images/K4.png", name: "K4" },
  { imgSrc: "./Images/K4.png", name: "K4" },
];

const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardData = randomize();
  //   console.log(cardData);

  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);


    
        card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
      var audio = new Audio('/pounding-cards-on-table-99355.mp3');
      audio.play();
    });
  });
};

const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCard = document.querySelectorAll(".flipped");
  const display = document.querySelectorAll(".display");
  // console.log(clickedCard);
  if (flippedCard.length === 2) {
    if (
      flippedCard[0].getAttribute("name") ===
      flippedCard[1].getAttribute("name")
    ) {
      // console.log("match");
      flippedCard.forEach((card) => {
        card.classList.add("display");
        card.classList.remove("flipped");
        // console.log(card);
        card.style.pointerEvents = "none";
      });
    } else {
      // console.log("wrong");
      flippedCard.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLiverCount.textContent = playerLives;
      if (playerLives === 0) {
        restart();
        // console.log(playerLiverCount);
      }

      console.log(playerLives);
    }
  }
};

const restart = () => {
  
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    cards[index].classList.remove("display");

    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
    }, 1000);
    console.log(cards);
  });

  playerLives = 5;
  playerLiverCount.textContent = playerLives;

  // console.log(cards);
};

cardGenerator();
