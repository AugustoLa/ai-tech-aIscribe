import HolderInfos from "../components/landingComponents/HolderInfos";
import Hero from "../components/landingComponents/Hero";
import Navbar from "../components/Navbar";
import Cards from "../components/landingComponents/Cards";
import Footer from "../components/Footer";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <HolderInfos></HolderInfos>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;
