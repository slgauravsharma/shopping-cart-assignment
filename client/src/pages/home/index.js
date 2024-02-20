import "../../assets/scss/main.scss";
import { fetchBannerList, fetchCategoryList } from "../../services/homeService";
import Handlebars from "handlebars";
import homeTemplate from "./home.hbs";
import Icons from "../../utils/icons";
import { getImageByPath, isMobile } from "../../utils/utils";

console.log("This is the index page.");

let state = {};

const getPrevButton = () => document.querySelector(".home-banner-prev");
const getNextButton = () => document.querySelector(".home-banner-next");
const getBannerListElement = () =>
  document.getElementById("banner-list-container");

export async function getCategoryList() {
  let categoryList = [];
  try {
    categoryList = await fetchCategoryList();
  } catch (e) {
    console.log("Unable to load category list");
  }
  return categoryList;
}

async function getBannerList() {
  let bannerList = [];
  try {
    bannerList = await fetchBannerList();
  } catch (e) {
    console.log("Unable to load banner list");
  }
  return bannerList;
}

/* utils */
function getSelectedIndex() {
  return state.bannerList.findIndex(
    (banner) => getImageByPath(banner.bannerImageUrl) === state.selectedBanner
  );
}

function disabledEnableCarouselButton() {
  const selectedIndex = getSelectedIndex();
  if (selectedIndex === 0) {
    return getPrevButton().classList.add("disabled");
  }

  if (selectedIndex === state.bannerList.length - 1) {
    return getNextButton().classList.add("disabled");
  }
}

function initListener() {
  function updateCarousel(hasIncrement = false) {
    const selectedIndex = getSelectedIndex();
    const updatedIndex = hasIncrement ? selectedIndex + 1 : selectedIndex - 1;
    const isUpdateBannerList = hasIncrement
      ? state.bannerList.length - 1 > selectedIndex
      : selectedIndex;
    if (isUpdateBannerList) {
      state.selectedBanner = getImageByPath(
        state.bannerList[updatedIndex].bannerImageUrl
      );
      renderTemplate();
    }
  }

  function onBannerBulletPointClick(event) {
    if (event.target && event.target.matches(".banner-bullet-point")) {
      const selectedIndex = event.target.dataset.itemId;
      state.selectedBanner = getImageByPath(
        state.bannerList[selectedIndex]?.bannerImageUrl
      );
      renderTemplate();
    }
  }

  getPrevButton().addEventListener("click", () => updateCarousel(false));
  getNextButton().addEventListener("click", () => updateCarousel(true));
  getBannerListElement().addEventListener("click", onBannerBulletPointClick);
}

function renderTemplate() {
  state.selectedIndex = getSelectedIndex();
  const html = homeTemplate(state);
  document.body.classList.add("home");
  document.body.innerHTML = html;
  initListener();
  disabledEnableCarouselButton();
}

async function init() {
  const bannerList = await getBannerList();
  const categoryList = await getCategoryList();
  state = {
    appLogoSrc: isMobile() ? Icons.appLogo : Icons.appLogo2X,
    headerCartImage: Icons.appCart,
    bannerList,
    categoryList,
    selectedBanner: getImageByPath(bannerList[0]?.bannerImageUrl),
    selectedIndex: 0,
  };
  renderTemplate();
}

document.addEventListener("DOMContentLoaded", init);
