import Icons from "../../utils/icons";
import "../../assets/scss/main.scss";
import { isMobile } from "../../utils/utils";
import productsTemplate from "./products.hbs";
import {
  fetchCategoryList,
  fetchProductList,
} from "../../services/homeService";

console.log("This is the products page.");

const getCategoryListElement = () =>
  document.getElementById("category-list-container");
const getProductListElement = () =>
  document.getElementById("products-list-container");

let state = {};

export async function getCategoryList() {
  let categoryList = [];
  try {
    categoryList = await fetchCategoryList();
  } catch (e) {
    console.log("Unable to load category list");
  }
  return categoryList;
}

export async function getProductList() {
  let productList = [];
  try {
    productList = await fetchProductList();
  } catch (e) {
    console.log("Unable to load product list");
  }
  return productList;
}

function initListener() {
  function onProductClick(event) {
    console.log({ event });
    if (event.target && event.target.matches(".product-item")) {
      const categoryId = event.target.dataset.itemId;
      state.filteredProductList = state.productList.filter(
        (product) => product.category === categoryId
      );
      renderTemplate();
    }
  }

  function onCategoryClick(event) {
    console.log({ event });
    if (event.target && event.target.matches(".category-item")) {
      state.selectedCategoryIndex = event.target.dataset.itemId;
      state.filteredProductList = state.productList.filter(
        (product) =>
          product.category ===
          state.categoryList[state.selectedCategoryIndex].id
      );
      console.log({ filteredProductList: state.filteredProductList });
      renderTemplate();
    }
  }
  getCategoryListElement().addEventListener("click", onCategoryClick);
  // getProductListElement().addEventListener("click", onProductClick);
}

function renderTemplate() {
  const html = productsTemplate(state);
  document.body.classList.add("products");
  document.body.innerHTML = html;
  initListener();
}

async function init() {
  const categoryList = await getCategoryList();
  const productList = await getProductList();
  console.log({ productList });
  state = {
    appLogoSrc: isMobile() ? Icons.appLogo : Icons.appLogo2X,
    headerCartImage: Icons.appCart,
    filteredProductList: categoryList,
    categoryList,
    productList,
  };
  renderTemplate();
}

document.addEventListener("DOMContentLoaded", init);
