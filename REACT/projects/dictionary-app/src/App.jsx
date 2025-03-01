import { BrowserRouter, Route, Routes } from "react-router";
import PageLayout from "./layout/PageLayout.jsx";
import Error404Page from "./pages/Error404Page.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
