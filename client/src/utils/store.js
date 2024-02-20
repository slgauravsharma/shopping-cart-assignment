const getCategoryListFromStore = () =>
  localStorage.getItem("category-list") ??
  JSON.parse(localStorage.getItem("category-list"));

const setCategoryListToStore = (data) =>
  localStorage.setItem("category-list", JSON.stringify(data));

const getProcutsListFromStore = () =>
  localStorage.getItem("products-list") ??
  JSON.parse(localStorage.getItem("products-list"));

const setProcutsListToStore = (data) =>
  localStorage.setItem("products-list", JSON.stringify(data));
