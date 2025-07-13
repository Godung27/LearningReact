import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {

  return (
    <>
      <Header /> {/*same but the end of code as "img" must have /> */}
      {/* <Header></Header> */}
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
