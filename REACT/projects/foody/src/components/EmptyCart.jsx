const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-center">
      <img
        className="h-[128px] w-[128px]"
        src="/images/illustration-empty-cart.svg"
        alt="Empty Cart"
      />
      <p className="text-appRose-500 font-medium">
        Your added items will appear here
      </p>
    </div>
  );
};

export default EmptyCart;
