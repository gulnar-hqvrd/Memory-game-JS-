const section = document.querySelector("section");
const playerLiverCount = document.querySelector("span");
const playerLives = 6;

playerLiverCount.textContent = playerLives;

const getData = () => [
  { imgSrc: "./Images/card1.png", name: "card1" },
  { imgSrc: "./Images/card2.png", name: "card2" },
  { imgSrc: "./Images/card3.png", name: "card3" },
  { imgSrc: "./Images/card4.png", name: "card4" },
  { imgSrc: "./Images/card5.png", name: "card5" },
  { imgSrc: "./Images/card6.png", name: "card6" },
  { imgSrc: "./Images/card7.png", name: "card7" },
  { imgSrc: "./Images/card8.png", name: "card8" },
  { imgSrc: "./Images/card9.png", name: "card9" },
  { imgSrc: "./Images/K3.png", name: "K3" },
  { imgSrc: "./Images/K4.png", name: "K4" },
  { imgSrc: "./Images/main.png", name: "main" },
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
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
    });
  });
};

cardGenerator();
