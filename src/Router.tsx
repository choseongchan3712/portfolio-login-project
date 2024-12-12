import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Accession from "./pages/Accession";

const Router = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/accession" element={<Accession />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
