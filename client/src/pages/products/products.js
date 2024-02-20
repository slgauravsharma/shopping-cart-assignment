import Icons from "../../utils/icons";
import "../../assets/scss/main.scss";
import { isMobile } from "../../utils/utils";
import productsTemplate from "./products.hbs";
import {
  fetchCategoryList,
  fetchProductList,
} from "../../services/homeService";

console.log("This is the products page.");
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

function renderTemplate() {
  const html = productsTemplate(state);
  document.body.classList.add("products");
  document.body.innerHTML = html;
}

async function init() {
  const categoryList = await getCategoryList();
  const productList = await getProductList();
  console.log({ productList });
  state = {
    appLogoSrc: isMobile() ? Icons.appLogo : Icons.appLogo2X,
    headerCartImage: Icons.appCart,
    categoryList,
    productList,
  };
  renderTemplate();
}

document.addEventListener("DOMContentLoaded", init);
