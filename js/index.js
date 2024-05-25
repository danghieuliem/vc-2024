const mainColorDarker = "#2C3333";
const mainColorDark = "#2E4F4F";
const mainColor = "#0E8388";
const mainColorLight = "#CBE4DE";

const listIcon = [
  "fa-brands fa-square-js",
  "fa-brands fa-node-js",
  "fa-brands fa-react",
  "fa-solid fa-code",
  "fa-solid fa-bugs",
  "fa-solid fa-bug",
  "fa-solid fa-circle-exclamation",
  "fa-solid fa-bomb",
  "fa-solid fa-code-branch",
  "fa-brands fa-square-github",
  "fa-brands fa-square-git",
  "fa-solid fa-heart",
  "fa-solid fa-thumbs-up",
  "fa-solid fa-mug-hot",
  "fa-solid fa-earth-americas",
  "fa-solid fa-check-double",
  "fa-brands fa-android",
];

const getRandomIcon = () => {
  const idex = parseInt(
    (Math.random() * listIcon.length * 10) % listIcon.length
  );
  return listIcon[idex];
};

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
      return [mainColor, "rgba(0,0,0,0)"][anime.random(0, 1)];
    },
    borderBottomColor: function () {
      return [mainColor, "rgba(0,0,0,0)"][anime.random(0, 1)];
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

    if (window.innerWidth > 1024) {
      const itemChild = document.createElement("i");
      itemChild.className = `child ${getRandomIcon()}`;

      item.addEventListener("click", (e) => {
        item.firstChild.className = `child ${getRandomIcon()}`;
      });

      item.onmouseenter = (e) => {
        item.firstChild.className = `child ${getRandomIcon()}`;
      };

      item.appendChild(itemChild);
    }

    main.appendChild(item);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  inItBackground();
  randomBg();
  const toggleBtn = document.getElementById("toggle-main-content");

  toggleBtn.addEventListener("click", () => {
    const isHide = document
      .getElementById("main-content")
      .classList.toggle("display-none");
    toggleBtn.firstChild.className = isHide
      ? "fa-solid fa-square-caret-down"
      : "fa-solid fa-square-minus";
  });
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
    inItBackground();
  })
);
