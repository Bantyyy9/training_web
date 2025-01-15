import { useCarts } from "../hooks/app-hook";

const AddToCartButton = ({ item }) => {
  const { addToCarts } = useCarts();
  return (
    <button
      onClick={() => addToCarts(item)}
      className="w-full bg-appRose-50 rounded-full px-4 py-2 flex items-center gap-1 border border-appRose-900 justify-center hover:bg-appRose-100"
    >
      <img src="/images/icon-add-to-cart.svg" alt="Icon" />
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
