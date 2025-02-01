import "./App.module.css";
import { useState } from "react";
import Search from "./components/Search";
import Foodlist from "./components/Foodlist";
import Navbar from "./components/Navbar";
import Container from "./components/container";
import Innercomponen from "./components/Innercomponen";
import Fooddetails from "./components/Fooddetails";

function App() {
  const [fooddata, setfooddata] = useState([]);
  const [foodid, setfoodid] = useState("642583");
  return (
    <>
      <Navbar />
      <Search recipedata={fooddata} setfooddata={setfooddata} />
      <Container>
        <Innercomponen>
          <Foodlist setfoodid={setfoodid} recipedata={fooddata} />
        </Innercomponen>
        <Innercomponen>
          <Fooddetails foodid={foodid} />
        </Innercomponen>
      </Container>
    </>
  );
}

export default App;
