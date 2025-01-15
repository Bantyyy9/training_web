import { useAppUtils, useCarts } from "../hooks/app-hook";

const CartItem = ({ cart }) => {
  const { formatPrice } = useAppUtils();
  const { removeFromCarts } = useCarts();
  const title = cart?.name || "--No Name--";
  const qty = cart?.quantity || 1;
  const price = cart?.price;
  const total = qty * price;

  return (
    <div className="flex items-center gap-4 justify-between border-b border-b-appRose-100 pb-4">
      <div className="flex flex-col gap-1">
        <h3 className="font-bold">{title}</h3>
        <div className="flex items-center gap-4 text-sm">
          <span className="font-semibold text-appRed">{qty}X</span>
          <p className="flex items-center gap-3 text-appRose-400">
            <span className="">@ &#8358;{formatPrice(price)}</span>
            <span className="font-medium">&#8358;{formatPrice(total)}</span>
          </p>
        </div>
      </div>
      <button
        onClick={() => removeFromCarts(cart?.id)}
        className="flex items-center justify-center text-center h-6 w-6 rounded-full border  border-appRose-400"
      >
        <img src="/images/icon-remove-item.svg" alt="Remove" />
      </button>
    </div>
  );
};

export default CartItem;
