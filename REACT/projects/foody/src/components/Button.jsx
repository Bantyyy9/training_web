const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-appRed hover:bg-appRose-900 text-white rounded-full px-8 py-2 w-full flex items-center justify-center text-center"
    >
      {children}
    </button>
  );
};

export default Button;
