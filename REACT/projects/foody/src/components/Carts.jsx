import CartsList from "./CartsList";
import EmptyCart from "./EmptyCart";

const Carts = () => {
  const total = 1;
  return (
    <section className="bg-white flex flex-col gap-4 rounded-md p-5 w-full md:w-64 lg:w-80">
      <h3 className="font-bold text-appRed text-xl">Your Car({total})</h3>
      {total === 0 ? <EmptyCart /> : <CartsList />}
    </section>
  );
};

export default Carts;
