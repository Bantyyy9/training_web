import { createContext, useState } from "react";

// 1. create context
export const AppContext = createContext();

// 2. create provider from the context
export const AppProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{
        carts,
        setCarts,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
