import { BASE_URL } from "./endpoints";

export const getImageByPath = (imagePath) => `${BASE_URL}/${imagePath}`;

// Handlebars.registerHelper("eq", function (a, b) {
//     return a === b;
//   });

export const isMobile = () => window.innerWidth <= 544;
