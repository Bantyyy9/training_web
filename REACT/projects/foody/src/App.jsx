import Carts from "./components/Carts";
import OrderModal from "./components/OrderModal";
import ProductsList from "./components/ProductsList";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <main className="flex flex-col md:flex-row w-full xl:max-w-[1200px] md:items-start mx-auto gap-8 md:gap-5 p-4 xl:py-8">
        <ProductsList />
        <Carts />
      </main>
      <OrderModal />
    </AppProvider>
  );
}
// md: medium >= 768
// lg: large >= 1024
// xl: extra large >= 1280
export default App;
