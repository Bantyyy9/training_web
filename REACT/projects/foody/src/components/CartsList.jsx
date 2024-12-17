import CartItems from "./CartItems";
import CardOrderSummary from "./CardOrderSummary";

const CartsList = () => {
  return (
    <div className="flex flex-col gap-8">
      <CartItems />
      <CardOrderSummary />
    </div>
  );
};

export default CartsList;
