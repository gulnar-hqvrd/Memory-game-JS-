const section = document.querySelector("section");
const playerLiverCount = document.querySelector("span");
let playerLives = 3;

playerLiverCount.textContent = playerLives;

const getData = () => [
  { imgSrc: "./Images/card1.png", name: "card1" },
  { imgSrc: "./Images/card1.png", name: "card1" },
  { imgSrc: "./Images/card3.png", name: "card3" },
  { imgSrc: "./Images/card3.png", name: "card3" },
  { imgSrc: "./Images/card5.png", name: "card5" },
  { imgSrc: "./Images/card5.png", name: "card5" },
  { imgSrc: "./Images/card7.png", name: "card7" },
  { imgSrc: "./Images/card8.png", name: "card8" },
  { imgSrc: "./Images/card8.png", name: "card8" },
  { imgSrc: "./Images/card7.png", name: "card7" },
  { imgSrc: "./Images/card7.png", name: "card7" },
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
    });
  });
};

const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCard = document.querySelectorAll(".flipped");
  console.log(clickedCard);
  if (flippedCard.length === 2) {
    if (
      flippedCard[0].getAttribute("name") ===
      flippedCard[1].getAttribute("name")
    ) {
      // console.log("match");
      flippedCard.forEach((card) => {
        card.classList.remove("flipped");
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

    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
    }, 1000);
  });

  playerLives = 3;
  playerLiverCount.textContent = playerLives;

  console.log(cards);
};

cardGenerator();
