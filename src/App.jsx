import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Nav.jsx";
import Home from "./routes/home/home.jsx";
import Signin from "./routes/signin/signin.jsx";

const Shop = () => {
  return <h2>Shop</h2>;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
