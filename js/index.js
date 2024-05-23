document.getElementById("btn-download-cv").addEventListener(
  "click",
  function () {
    window.open("./assets/Dang-Hieu-Liem-front-end.pdf");
  },
  false
);

const mainColorDarker = "#2C3333";
const mainColorDark = "#2E4F4F";
const mainColor = "#0E8388";
const mainColorLight = "#CBE4DE";

const itemSize = 100;
const cowsNumber = parseInt(window.innerWidth / itemSize);
const colsNumber = parseInt(window.innerHeight / itemSize);

const initBackground = () => {
  const arrayItem = [];
  for (i = 0; i < cowsNumber * colsNumber; ++i) {
    const item = document.createElement("span");
    item.className = "el";
    item.style.height = `${itemSize}px`;
    item.style.width = `${itemSize}px`;
    arrayItem.push(item);
  }
  document.querySelector(".background-anime").append(...arrayItem);
};
initBackground();

// ** Animation

anime({
  targets: ".background-anime .el",
  backgroundColor: [
    {
      value: mainColorDarker,
      easing: "easeOutSine",
      duration: 500,
    },
    {
      value: mainColorDark,
      easing: "easeInOutQuad",
      duration: 500,
    },
    {
      value: mainColor,
      easing: "easeInOutQuad",
      duration: 500,
    },
    {
      value: mainColorLight,
      easing: "easeInOutQuad",
      duration: 500,
    },
    {
      value: mainColor,
      easing: "easeInOutQuad",
      duration: 500,
    },
    {
      value: mainColorDark,
      easing: "easeInOutQuad",
      duration: 500,
    },
    {
      value: mainColorDarker,
      easing: "easeOutSine",
      duration: 500,
    },
  ],
  delay: anime.stagger(200, {
    grid: [cowsNumber, colsNumber],
    from: "first",
  }),
  loop: true,
  easing: "easeInOutExpo",
  direction: "revert",
});
