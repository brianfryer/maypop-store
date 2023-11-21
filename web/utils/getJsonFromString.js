const getJsonFromString = (string) => {
  try {
    return JSON.parse(string);
  } catch {
    return string;
  }
};

export default getJsonFromString;
