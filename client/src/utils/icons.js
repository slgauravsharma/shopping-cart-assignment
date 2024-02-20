import { getImageByPath } from "./utils";

const Icons = {
  appLogo: getImageByPath("/static/images/logo.png"),
  appLogo2X: getImageByPath("/static/images/logo_2x.png"),
  appCart: getImageByPath("/static/images/cart.svg"),
};

export default Icons;
