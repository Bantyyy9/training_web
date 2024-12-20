import { useAppUtils } from "../hooks/app-hook";

const CartItem = () => {
  const { formatPrice } = useAppUtils();
  const title = "Amala + Ewedu";
  const qty = 2;
  const price = 6_000;
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
      <button className="flex items-center justify-center text-center h-6 w-6 rounded-full border  border-appRose-400">
        <img src="/images/icon-remove-item.svg" alt="Remove" />
      </button>
    </div>
  );
};

export default CartItem;
