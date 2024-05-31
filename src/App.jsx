import { useState } from "react";
import Navbar from "./Navbar.jsx";

function App() {

  let searchObj = {
    searchby: "city",
    value: ""
  };

  let [searchBy , setSearchBy] = useState(searchObj);

  console.log(searchBy);

  return (
    <Navbar setSearchBy={setSearchBy}/>
  )
};

export default App;
