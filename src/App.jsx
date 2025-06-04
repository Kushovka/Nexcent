import "./App.css";
import Calender from "./sections/Calender";
import Clients from "./sections/Clients";
import Community from "./sections/Community";
import CTA from "./sections/CTA";
import Customer from "./sections/Customer";
import Footer from "./sections/Footer";
import Helping from "./sections/Helping";
import Home from "./sections/Home";
import Marketing from "./sections/Marketing";
import Navbar from "./sections/Navbar";
import Unlock from "./sections/Unlock";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Clients />
      <Community />
      <Unlock />
      <Helping />
      <Calender />
      <Customer />
      <Marketing />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
