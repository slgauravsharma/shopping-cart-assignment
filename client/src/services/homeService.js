import { apiClient } from "../utils/apiClient";
import endpoints from "../utils/endpoints";

export const fetchCategoryList = async () =>
  apiClient(endpoints.getCategoryList);

export const fetchBannerList = async () => apiClient(endpoints.getBannerList);

export const fetchProductList = async () => apiClient(endpoints.getProductList);
