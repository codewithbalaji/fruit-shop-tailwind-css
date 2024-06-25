import AppBar from "./components/AppBar";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Items from "./components/Items";
import SeasonSpecial from "./components/SeasonSpecial";

const App = () => {
  return (
    <>
      <AppBar/>
      <Filters/>
      <Items/>
      <SeasonSpecial/>
      <Footer/>
    </>
  );
};

export default App;
