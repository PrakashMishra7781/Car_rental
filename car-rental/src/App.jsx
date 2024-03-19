import "./App.css";
import UpperPage from "./components/upperPage";
import Cars from "./components/cars";
import AboutUs from "./components/aboutUs";
import Services from "./components/services";
import Testimonial from "./components/testimonial";
import Stats from "./components/stats";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="bg-slate-200">
        <UpperPage />
        <Cars />
        <AboutUs />
        <Services />
        <Testimonial />
        <Stats />
        <Footer />
      </div>
    </>
  );
}

export default App;
