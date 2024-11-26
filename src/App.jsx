import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Main_Card from "./components/Main_Card";
import Service from "./components/Service";
import Button from "./components/Button";
import MainBottom from "./components/MainBottom";


function App() {
  return (
    <>
      <Header />
      <Main />
      <Service/>
      <Main_Card/>
      <Button/>
      <MainBottom/>
    </>
  );
}

export default App;
