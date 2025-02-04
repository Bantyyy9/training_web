import { useAppUtils } from "../hooks/app-hook";

const OrderItem = ({ image, name, price, quantity }) => {
  const { formatPrice } = useAppUtils();

  const img = image?.thumbnail || "";
  const totalAmount = quantity * price;

  return (
    <div className="flex gap-4 border-b border-b-appRose-50 pb-2">
      <div className="flex flex-1 gap-2">
        <div className="h-14 w-14 rounded-sm overflow-hidden">
          <img className="w-full h-full object-cover" src={img} alt={name} />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-bold line-clamp-1">{name}</h4>
          <p className="text-sm font-semibold text-appRose-500">
            {" "}
            <span className=" text-appRed">{quantity}X </span> @ &#8358;
            {formatPrice(price)}
          </p>
        </div>
      </div>
      <h6 className="self-center font-bold text-appRose-900">
        &#8358;{formatPrice(totalAmount)}
      </h6>
    </div>
  );
};

export default OrderItem;
