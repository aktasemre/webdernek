export const handleApiError = (error) => {
  if (error.response) {
    throw new Error(error.response.data.message || 'API error occurred');
  }
  throw error;
};

export const formatQueryParams = (params) => {
  return Object.keys(params)
    .filter(key => params[key] != null)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
    .join('&');
}; 