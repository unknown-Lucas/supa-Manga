export const isTokenValid = () => {
  const expiratesAt = Number(localStorage.getItem('expiratesAt'));
  const actualTime = new Date().getTime();
  return actualTime < expiratesAt;
};

export const resetTokenCache = () => {
  localStorage.clear();
};
