import { useCarts } from "../hooks/app-hook";
import CartItem from "./CartItem";

const CartItems = () => {
  const { carts } = useCarts();
  console.log("My Carts", carts);

  return (
    <div className="flex flex-col gap-6 max-h-[300px] overflow-y-auto">
      {carts.map((cart) => {
        return <CartItem key={cart.id} cart={cart} />;
      })}
    </div>
  );
};

export default CartItems;
