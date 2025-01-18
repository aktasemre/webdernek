const data = {
  genel: require('@/data/genel.data.json'),
  duyurular: require('@/data/duyurular.data.json'),
  etkinlikler: require('@/data/etkinlikler.data.json'),
  haberler: require('@/data/haberler.data.json'),
  projeler: require('@/data/projeler.data.json'),
};

function getData(key) {
  try {
    return data[key] || {};
  } catch (error) {
    console.error(`Veri alınırken hata oluştu: ${error.message}`);
    return {};
  }
}

module.exports = getData;
