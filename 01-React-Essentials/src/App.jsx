import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const handleSelect = function (selectedButton) {
    // selectedButton => "Components", "JSX", "Props", State
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent =
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic.toLowerCase()].title}</h3>
        <p>{EXAMPLES[selectedTopic.toLowerCase()].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic.toLowerCase()].code}</code>
        </pre>
      </div>
  }

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
            <TabButton
              isSelect={selectedTopic === "Components"}
              onSelect={() => handleSelect("Components")}
            >
              Components
            </TabButton>
            {/* <TabButton label="Components" /> */}
            <TabButton
              isSelect={selectedTopic === CORE_CONCEPTS[1].title}
              onSelect={() => handleSelect(CORE_CONCEPTS[1].title)}
            >
              {CORE_CONCEPTS[1].title}
            </TabButton>
            <TabButton
              isSelect={selectedTopic === CORE_CONCEPTS[2].title}
              onSelect={() => handleSelect(CORE_CONCEPTS[2].title)}
            >
              {CORE_CONCEPTS[2].title}
            </TabButton>
            <TabButton
              isSelect={selectedTopic === CORE_CONCEPTS[3].title}
              onSelect={() => handleSelect(CORE_CONCEPTS[3].title)}
            >
              {CORE_CONCEPTS[3].title}
            </TabButton>
          </menu>
          {tabContent}

          {/* {!selectedTopic && <p>Please select a topic.</p>}
          {
            selectedTopic &&
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic.toLowerCase()].title}</h3>
              <p>{EXAMPLES[selectedTopic.toLowerCase()].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic.toLowerCase()].code}</code>
              </pre>
            </div>
          } */}

          {/* {
            !selectedTopic ? <p>Please select a topic.</p> :
              <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic.toLowerCase()].title}</h3>
                <p>{EXAMPLES[selectedTopic.toLowerCase()].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic.toLowerCase()].code}</code>
                </pre>
              </div>
          } */}
        </section>
      </main>
    </div>
  );
}

export default App;
