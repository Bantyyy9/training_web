import { useAppData } from "../context/AppContext";

const HomePage = () => {
  const { data, loading } = useAppData();

  console.log({ data, loading });
  return <div className="">Aliquam</div>;
};

export default HomePage;
