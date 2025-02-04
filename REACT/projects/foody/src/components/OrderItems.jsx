import { useAppUtils, useCarts } from "../hooks/app-hook";
import OrderItem from "./OrderItem";

const OrderItems = () => {
  const { formatPrice } = useAppUtils();
  const { carts, totalAmount } = useCarts();
  return (
    <div className="bg-appRose-100 rounded-lg p-4 flex flex-col gap-2 flex-1">
      <div className="flex-1 flex flex-col gap-2 max-h-[250px] overflow-y-auto overflow-x-hidden">
        {carts.map((item) => (
          <OrderItem key={item.id} {...item} />
        ))}
      </div>
      <section className="flex items-center justify-between">
        <p>Order Total</p>
        <h2 className="text-xl font-bold">&#8358;{formatPrice(totalAmount)}</h2>
      </section>
    </div>
  );
};

export default OrderItems;
