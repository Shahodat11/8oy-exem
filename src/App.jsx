import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      {/* <Header /> */}
      {/* <Link to={"/admin"}>admin</Link> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Hom/>} /> */}
      {/* <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route> */}
      {/* </Routes> */}
    </>
  );
}

export default App;
