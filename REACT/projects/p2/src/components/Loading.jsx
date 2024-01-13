const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="min-h-[300px] flex flex-col items-center justify-center">
      <i className="h-6 w-6 rounded-full bg-gradient-to-tr from-green-500 to-green-700 animate-spin"></i>
      <p className="animate-pulse">{text}</p>
    </div>
  );
};

export default Loading;
