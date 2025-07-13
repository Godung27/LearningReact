import CoreConcept from "./CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {
          CORE_CONCEPTS.map((coreConceptItems) =>
            <CoreConcept key={coreConceptItems.title} {...coreConceptItems} />
          )}

        {/* <CoreConcept
                image={CORE_CONCEPTS[0].image}
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
              />
              <CoreConcept {...CORE_CONCEPTS[1]} />
              <CoreConcept {...CORE_CONCEPTS[2]} />
              <CoreConcept {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}