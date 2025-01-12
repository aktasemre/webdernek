import data from '../data/static/data_tr.json';
import { DataType } from '../types/data';

type DataKey = keyof DataType;
type DataValue<K extends DataKey> = DataType[K];

const isArrayKey = (key: DataKey): boolean => {
  return ['duyurular', 'etkinlikler', 'haberler', 'projeler'].includes(key as string);
};

export const getData = <K extends DataKey>(key: K): DataValue<K> => {
  try {
    if (!data) {
      throw new Error('Veri dosyası yüklenemedi');
    }

    const value = (data as Record<K, DataValue<K>>)[key];
    if (value === undefined || value === null) {
      console.warn(`'${String(key)}' için veri bulunamadı, boş değer döndürülüyor`);
      
      // Veri tipine göre varsayılan değer döndür
      if (isArrayKey(key)) {
        return ([] as unknown) as DataValue<K>;
      }
      return ({} as unknown) as DataValue<K>;
    }

    return value;
  } catch (error) {
    console.error('Veri alınırken hata:', error);
    
    // Veri tipine göre varsayılan değer döndür
    if (isArrayKey(key)) {
      return ([] as unknown) as DataValue<K>;
    }
    return ({} as unknown) as DataValue<K>;
  }
};

export const getAllData = (): DataType => {
  try {
    if (!data) {
      throw new Error('Veri dosyası yüklenemedi');
    }
    return data;
  } catch (error) {
    console.error('Tüm veriler alınırken hata:', error);
    return {} as DataType;
  }
};

// Özel veri getirme fonksiyonları - Tip güvenli ve hata yönetimli
export const getAboutData = () => getData('about');
export const getKoyData = () => getData('koy');
export const getDuyurular = () => getData('duyurular');
export const getEtkinlikler = () => getData('etkinlikler');
export const getHaberler = () => getData('haberler');
export const getProjeler = () => getData('projeler');
export const getIstatistikler = () => getData('istatistikler');

// Örnek kullanımlar:
// const aboutData = getAboutData();
// const koyBilgileri = getKoyData();
// const duyurular = getDuyurular(); 