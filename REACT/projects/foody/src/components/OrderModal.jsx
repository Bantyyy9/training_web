import { useEffect } from "react";
import { useOrder } from "../hooks/app-hook";
import Button from "./Button";
import OrderItems from "./OrderItems";

const OrderModal = () => {
  const { modalOpen, closeOrderConfirmModal } = useOrder();
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [modalOpen]);

  return modalOpen ? (
    <div className="fixed inset-0 bg-black/50 flex items-end md:items-center md:justify-center">
      <div className="bg-white h-[85%] w-full p-5 pt-6 rounded-t-lg flex flex-col gap-5 md:w-[450px]  md:h-auto md:max-h-[90%] md:rounded-lg overflow-y-auto overflow-x-hidden">
        <header className="flex flex-col gap-2 items-start">
          <img src="/images/icon-order-confirmed.svg" alt="Order Confirmed" />
          <h3 className="font-extrabold text-3xl lg:text-4xl max-w-[70%] md:max-w-[100%]">
            Order Confirmed
          </h3>
          <p className="text-appRose-500">We hope you enjoy your food!</p>
        </header>
        <OrderItems />
        <Button onClick={() => closeOrderConfirmModal()}>
          Start New Order
        </Button>
      </div>
    </div>
  ) : null;
};

export default OrderModal;
