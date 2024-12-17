import { useAppUtils } from "../hooks/app-hook";

const ProductItem = ({ image, name, category, price }) => {
  const { formatPrice } = useAppUtils();

  const showBorder = false;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <div
          className={`w-full h-44 overflow-hidden rounded-md border-2 ${
            showBorder ? "border-appRed" : "border-transparent"
          }`}
        >
          <img
            className="object-cover w-full h-full md:hidden"
            src={image.mobile}
            alt={name}
          />
          <img
            className="object-cover w-full h-full hidden md:block lg:hidden"
            src={image.tablet}
            alt={name}
          />
          <img
            className="object-cover w-full h-full hidden lg:block"
            src={image.desktop}
            alt={name}
          />
        </div>
        <div className="p-1 absolute top-[90%] left-1/2 -translate-x-1/2 bg-red-500">
          action
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-appRose-300">{category}</span>
        <h3 className="font-bold">{name}</h3>
        <p className="text-appRed font-semibold">&#8358;{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default ProductItem;
