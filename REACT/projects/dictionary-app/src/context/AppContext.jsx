import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        data,
        setData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppData = () => {
  const { search, setSearch, data, setData } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    console.log("search", search);
    setTimeout(() => {
      setLoading(false);
      console.log("Called api with the Search=>", search);
    }, 4_000);
  };

  return {
    search,
    setSearch,
    data,
    setData,
    fetchData,
    loading,
  };
};
