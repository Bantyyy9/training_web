import { useCarts } from "../hooks/app-hook";
import Button from "./Button";
import CartsList from "./CartsList";
import EmptyCart from "./EmptyCart";

const Carts = () => {
  const { totalCartItems } = useCarts();

  const getDataFromApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log("Response", response);

      if (response.ok) {
        console.log("Success");
        response.json().then((data) => {
          console.log("Data", data);
        });
      } else {
        console.log("Error");
      }
    });
  };

  return (
    <section className="bg-white flex flex-col gap-4 rounded-md p-5 w-full md:w-64 lg:w-80">
      <h3 className="font-bold text-appRed text-xl">
        Your Cart({totalCartItems})
      </h3>
      {totalCartItems === 0 ? <EmptyCart /> : <CartsList />}
      <Button onClick={getDataFromApi}>Fetch Data</Button>
    </section>
  );
};

export default Carts;
