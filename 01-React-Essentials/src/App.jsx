import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";

function App() {
  return (
    <div>
      <Header /> {/*same but the end of code as "img" must have /> */}
      {/* <Header></Header> */}
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} /> {/* same */}
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu>
            <TabButton>Components</TabButton>
            {/* <TabButton label="Components" /> */}
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
