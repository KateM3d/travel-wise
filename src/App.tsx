import { BrowserRouter, Route, Routes } from "react-router-dom";
import CityList from "./components/CityList/CityList";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<CityList />} />

            <Route path="cities" element={<p>cities</p>} />
            <Route path="countries" element={<p>Countries</p>} />
            <Route path="form" element={<p>form</p>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
