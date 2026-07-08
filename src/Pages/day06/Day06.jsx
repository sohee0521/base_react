import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./Pages/main";
import Sub01 from "./Pages/Sub01";
import Sub02 from "./Pages/Sub02";
import Sub03 from "./Pages/Sub03";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ErrorPage from "./Pages/ErrorPage";

export default function Day06() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub01" element={<Sub01 />} />
        <Route path="/sub02" element={<Sub02 />} />
        <Route path="/sub03" element={<Sub03 />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
