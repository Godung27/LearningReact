import { useState } from "react";

import { CORE_CONCEPTS } from "../data";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
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
    <Section id="examples">
      <h2>Example</h2>
      <Tabs
        // ButtonsContainer="menu"
        buttons={
          <>
            {
              CORE_CONCEPTS.map((coreConceptClick) =>
                <TabButton
                  key={coreConceptClick.title}
                  isSelect={selectedTopic === { ...coreConceptClick }.title}
                  onClick={() => handleSelect({ ...coreConceptClick }.title)}
                >
                  {{ ...coreConceptClick }.title}
                </TabButton>
              )
            }
          </>
        }>

        {/* {CORE_CONCEPTS.map((coreConceptClick) =>
          <TabButton key={coreConceptClick.title}
            isSelect={selectedTopic === { ...coreConceptClick }.title}
            onClick={() => handleSelect({ ...coreConceptClick }.title)}
          >
            {{ ...coreConceptClick }.title}
          </TabButton>
        )} */}

        {/* <TabButton label="Components" /> */}

        {/* <TabButton
              isSelect={selectedTopic === "Components"}
              onSelect={() => handleSelect("Components")}
            >
              Components
            </TabButton>
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
            </TabButton> */}
        {tabContent}
      </Tabs >

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
    </Section >
  );
}