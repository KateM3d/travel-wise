import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/app" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
