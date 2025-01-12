const data = require('../data/static/data_tr.json');

const isArrayKey = (key) => {
  return Array.isArray(data[key]);
};

const getData = (key) => {
  try {
    if (!data[key]) {
      console.warn(`${key} için veri bulunamadı`);
      return isArrayKey(key) ? [] : {};
    }
    return data[key];
  } catch (error) {
    console.error(`Veri alınırken hata oluştu: ${error.message}`);
    return isArrayKey(key) ? [] : {};
  }
};

const getAllData = () => {
  return data;
};

module.exports = {
  getData,
  getAllData
}; 