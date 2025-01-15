import { useCarts } from "../hooks/app-hook";

const QuantityBox = ({ itemId }) => {
  const { getCartItemQuantity, updateCartItem } = useCarts();
  const count = getCartItemQuantity(itemId);
  return (
    <div className="bg-appRed rounded-full px-4 py-2 flex items-center justify-between gap-5">
      <button
        onClick={() => updateCartItem(itemId, "decrement")}
        className="border border-white rounded-full w-6 h-6 flex items-center justify-center text-center hover:opacity-70"
      >
        <img src="/images/icon-decrement-quantity.svg" alt="-" />
      </button>
      <span className="text-white text-center select-none">{count}</span>
      <button
        onClick={() => updateCartItem(itemId, "increment")}
        className="border border-white rounded-full w-6 h-6 flex items-center justify-center text-center hover:opacity-70"
      >
        <img src="/images/icon-increment-quantity.svg" alt="+" />
      </button>
    </div>
  );
};

export default QuantityBox;
