const mainColorDarker = "#2C3333";
const mainColorDark = "#2E4F4F";
const mainColor = "#0E8388";
const mainColorLight = "#CBE4DE";

document.getElementById("btn-download-cv").addEventListener(
  "click",
  function () {
    window.open("./assets/Dang-Hieu-Liem-front-end.pdf");
  },
  false
);

const randomBg = () =>
  anime({
    targets: "#main-bg .el",
    borderRightColor: function () {
      return [mainColor, "rgba(0,0,0,0)", "rgba(0,0,0,0)"][anime.random(0, 3)];
    },
    borderBottomColor: function () {
      return [mainColor, "rgba(0,0,0,0)", "rgba(0,0,0,0)"][anime.random(0, 3)];
    },
    easing: "easeInOutExpo",
    duration: 1500,
    complete: randomBg,
  });

const inItBackground = () => {
  const sizeItem = 50;
  const main = document.getElementById("main-bg");
  const cols = parseInt(main.offsetWidth / sizeItem) + 1;
  const rows = parseInt(main.offsetHeight / sizeItem) + 1;
  main.innerHTML = "";

  for (i = 0, size = cols * rows; i < size; ++i) {
    const item = document.createElement("div");
    item.className = "el";
    item.style.width = `${sizeItem}px`;
    item.style.height = `${sizeItem}px`;
    main.appendChild(item);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  inItBackground();
  randomBg();
});

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

window.addEventListener(
  "resize",
  debounce(() => {
    console.log("123");
    inItBackground();
  })
);
