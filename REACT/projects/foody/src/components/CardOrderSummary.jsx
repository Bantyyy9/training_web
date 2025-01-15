import { useAppUtils, useCarts } from "../hooks/app-hook";
import Button from "./Button";

const CardOrderSummary = () => {
  const { formatPrice } = useAppUtils();
  const { totalAmount } = useCarts();

  return (
    <div className="flex flex-col gap-4">
      <section className="flex items-center justify-between">
        <p>Order Total</p>
        <h2 className="text-2xl font-bold">
          &#8358;{formatPrice(totalAmount)}
        </h2>
      </section>
      <div className="w-full rounded-md px-3 py-2 bg-appRose-100 flex items-center gap-2">
        <img src="/images/icon-carbon-neutral.svg" alt="Carbon Neutral" />
        <p className="flex-1 text-sm">
          This is an <span className="font-bold">carbon-neutral</span> delivery
        </p>
      </div>

      <Button>Confirm Order</Button>
    </div>
  );
};

export default CardOrderSummary;
