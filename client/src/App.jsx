import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import About from "./pages/about";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Header from "./components/header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
