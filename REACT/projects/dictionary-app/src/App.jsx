import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "./layout/PageLayout.jsx";
import Error404Page from "./pages/Error404Page.jsx";
import HomePage from "./pages/HomePage.jsx";
import { AppProvider } from "./context/AppContext.jsx";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Error404Page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
