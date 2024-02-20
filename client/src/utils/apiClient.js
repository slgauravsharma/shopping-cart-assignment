export const apiClient = async (url) => {
  return fetch(url).then((res) => res.json());
};
