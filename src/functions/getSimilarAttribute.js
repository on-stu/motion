import lineTypes from "../lib/lineTypes.json";

export const getSimilarAttribute = (str) => {
  let result = [];
  const typesCV = lineTypes.map((type) => type.constantVowel);
  const typesENG = lineTypes.map((type) => type.eng);
  const allKor = lineTypes.map((line) => line.kor);

  for (var i = 0; i < typesCV.length; i++) {
    const typeStr = typesCV[i].substring(0, str.length);
    const typeEng = typesENG[i].substring(0, str.length);
    if (str === typeStr) {
      result.push(lineTypes[i].kor);
    }
    if (str === typeEng) {
      result.push(lineTypes[i].kor);
    }
  }

  console.log(str.length);
  if (str.length === 0) {
    result = allKor;
  }

  return result;
};
