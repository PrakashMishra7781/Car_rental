import "./App.css";
import UpperPage from "./components/upperPage";
import Cars from "./components/cars";
import AboutUs from "./components/aboutUs";

function App() {
  return (
    <>
      <div className="bg-slate-200">
        <UpperPage />
        <Cars />
        <AboutUs />
      </div>
    </>
  );
}

export default App;
