import CartItem from "./CartItem";

const CartItems = () => {
  const carts = [5, 4, 3, 6, 7, 8, 20, 25, 30, 32];
  return (
    <div className="flex flex-col gap-6 max-h-[300px] overflow-y-auto">
      {carts.map((cart) => {
        return <CartItem key={cart} cart={cart} />;
      })}
    </div>
  );
};

export default CartItems;
