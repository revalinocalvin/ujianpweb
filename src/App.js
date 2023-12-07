import { BarangList } from "./components";
import { Navbar } from "./components";
import { BarangForm } from "./components";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<BarangList />} />
          <Route path="/create-item" element={<BarangForm />} />
          <Route path="/edit-item/:id" element={<BarangForm />} />
        </Routes>
      </div>
    </div>
  );
};
