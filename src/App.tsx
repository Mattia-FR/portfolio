import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/organisms/Footer";
import Header from "./components/organisms/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
