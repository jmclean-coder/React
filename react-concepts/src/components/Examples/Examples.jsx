import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../UI/TabButton/TabButton";
import CodeBlock from "../UI/CodeBlock/CodeBlock";
import Section from "../UI/Section/Section";
import Tabs from "../UI/Tabs/Tabs";

export default function Examples() {
  // states
  const [selectedTopic, setSelectedTopic] = useState("");

  //conditional content
  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    const { title, description, code } = EXAMPLES[selectedTopic];

    tabContent = (
      <div id="tab-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <CodeBlock theme={a11yDark} code={code} />
      </div>
    );
  }

  //functions

  function handleSelect(selectedButton) {
    // console.log(`Hello from ${selectedButton} button World!!`);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
