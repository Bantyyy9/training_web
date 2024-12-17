import products from "../assets/data.json";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  return (
    <section className="flex flex-col gap-8 md:flex-1">
      <header>
        <h1 className="text-3xl lg:text-5xl font-bold">Africana Foods</h1>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products?.map((product) => {
          return <ProductItem key={product?.name} {...product} />;
        })}
      </div>
    </section>
  );
};

export default ProductsList;
