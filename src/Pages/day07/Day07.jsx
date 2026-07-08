import { HashRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./Pages/SignUpPage";
import Main from "./Pages/Main";
import Header from "./Components/Header";

export default function Day07() {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/logInPage" element={<LogInPage />}></Route>
        <Route path="/signUpPage" element={<SignUpPage />}></Route>
      </Routes>
    </HashRouter>
  );
}
