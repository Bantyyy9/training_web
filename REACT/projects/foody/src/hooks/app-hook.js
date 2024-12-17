export const useAppUtils = () => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat().format(price);
  };

  return {
    formatPrice,
  };
};
