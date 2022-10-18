const arrTag = [];
const tagMaker = (container, tagName, content) => {
  let tagArr = [];
  if (Array.isArray(tagName) === false) {
    tagArr.push(`<${tagName}>${content}</${tagName}>`);
    container.innerHTML = tagArr.join("");
  } else {
    for (let i = 0; i < tagName.length; i++) {
      tagArr.push(`<${tagName[i]}>${content}</${tagName[i]}>`);
    }
    container.innerHTML = tagArr.join("");
  }
};

const styling = (tag, css) => {
  for (let i = 0; i < tag.length; i++) {
    const stOb = css[i];
    for (let cssKey in stOb) {
      tag[i].style[cssKey] = stOb[cssKey];
    }
  }
};

const root = document.getElementById("root");
console.dir(root);

tagMaker(root, "div", "");

const indexDiv = root.children[0];
const indexDivChilren = ["img", "header", "main", "footer"];

tagMaker(indexDiv, indexDivChilren, "");

const bg_img = indexDiv.children[0];
const header = indexDiv.children[1];
const main = indexDiv.children[2];
const footer = indexDiv.children[3];

bg_img.src = "./source/img/bg_dpimg.png";

tagMaker(header, "div", "");
const menuDiv = header.children[0];
const menuDivChildren = ["div", "div", "div"];
tagMaker(menuDiv, menuDivChildren, "");
const searchDiv = menuDiv.children[0];
searchDiv.textContent = "검색";
const signDiv = menuDiv.children[1];
signDiv.textContent = "로그인";
const boardDiv = menuDiv.children[2];
boardDiv.textContent = "게시판";

const mainChildren = ["div", "section"];
tagMaker(main, mainChildren);
const randomDiv = main.children[0];
const section = main.children[1];


const ranBtnArr = [];
ranBtnArr.push(`<div id="genre-1"></div>`);
ranBtnArr.push(`<div id="genre-2"></div>`);
ranBtnArr.push(`<div id="genre-3"></div>`);
ranBtnArr.push(`<div id="genre-4"></div>`);
ranBtnArr.push(`<div id="genre-5"></div>`);
ranBtnArr.push(`<div id="genre-6"></div>`);
ranBtnArr.push(`<div id="genre-7"></div>`);
ranBtnArr.push(`<div id="genre-8"></div>`);
ranBtnArr.push(`<div id="genre-9"></div>`);
ranBtnArr.push(`<div id="genre-10"></div>`);

randomDiv.innerHTML = ranBtnArr.join("");

for (let i = 0; i < randomDiv.children.length; i++) {
  randomDiv.children[i].innerHTML = "<div>장르</div>";
  randomDiv.children[i].style.width = "8vw";
  randomDiv.children[i].style.height = "2vw";
  randomDiv.children[i].style.display = "flex";
  randomDiv.children[i].style.flexDirection = "row";
  randomDiv.children[i].style.flexWrap = "nowrap";
  randomDiv.children[i].style.alignContent = "center";
  randomDiv.children[i].style.justifyContent = "center";
  randomDiv.children[i].style.alignItems = "center";
  randomDiv.children[i].style.border = "1px solid rgba(214, 214, 214, 1)";
  randomDiv.children[i].style.borderRadius = "27px";
}

const sectionChidren = ["div", "div"];
tagMaker(section, sectionChidren);
const explDiv = section.children[0];
tagMaker(explDiv, "div", "설명구간");

const vodDiv = section.children[1];
tagMaker(vodDiv, "video");
vodDiv.style.width = "88%";
const mainVod = vodDiv.children[0];
mainVod.src = "./source/vod/tekken8.mp4";
mainVod.autoplay = true;
mainVod.controls = true;
mainVod.loop = true;
mainVod.muted = true;
console.dir(mainVod);

mainVod.style.width = "100%";

mainVod.addEventListener("mouseover", event => {
  mainVod.pause();
  explDiv.style.display = "flex";
});
mainVod.addEventListener("mouseout", event => {
  mainVod.play();
  explDiv.style.display = "none";
});

footer.textContent = "여기는 푸터";

arrTag.push(indexDiv);
arrTag.push(bg_img);
arrTag.push(header);
arrTag.push(menuDiv);
arrTag.push(main);
arrTag.push(randomDiv);
arrTag.push(section);
arrTag.push(explDiv);
arrTag.push(vodDiv);
arrTag.push(footer);

const indexCss = [
  {
    width: "99vw",
  },
  {
    width: "100%",
    position: "absolute",
    zIndex: "-1",
  },
  {
    width: "100%",
    height: "10vh",
    backgroundColor: "rgba(45, 45, 45, 0.5)",
    display: "flex",
    flexDirection: "row-reverse",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "rgba(214, 214, 214, 1)",
  },
  {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
  },
  {
    width: "100%",
    display: "flex",
  },
  {
    width: "30%",
    color: "rgba(214, 214, 214, 1)",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  {
    width: "70%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    alignItems: "center",
  },
  {
    width: "49%",
    height: "71%",
    position: "absolute",
    backgroundColor: "black",
    opacity: "0.4",
    display: "none",
    left: "34%",
    color: "white",
    fontSize: "5rem",
  },
  {
    width: "88%",
  },
  {
    width: "100%",
    height: "10vh",
    backgroundColor: "rgba(45, 45, 45, 0.5)",
    color: "rgba(214, 214, 214, 1)",
  },
];

styling(arrTag, indexCss);