export const BASE_URL = "http://localhost:8000";
const endpoints = {
  getBannerList: `${BASE_URL}/api/banners`,
  getCategoryList: `${BASE_URL}/api/categories`,
  getProductList: `${BASE_URL}/api/products`,
};

export default endpoints;
