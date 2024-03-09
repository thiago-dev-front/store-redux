import { Route, BrowserRouter, Routes } from "react-router-dom";
import Products from "./components/Products";
import Layout from "./layouts/index";
import Login from "./components/Login";
import NotFound from "./components/Not-Found";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
