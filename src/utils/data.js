import data from '@/data/data.json';

export const getData = (path) => {
  return path.split('.').reduce((obj, key) => obj?.[key], data);
};

export const getContactInfo = () => getData('contact');
export const getSocialLinks = () => getData('social');
export const getForms = () => getData('forms');
export const getNavigation = () => getData('navigation');
export const getSeoData = () => getData('seo'); 