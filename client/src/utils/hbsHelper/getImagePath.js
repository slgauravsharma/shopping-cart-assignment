import { BASE_URL } from "../endpoints";

const getImageByPath = (imagePath) => {
  return `${BASE_URL}/${imagePath}`;
};

export default getImageByPath;
