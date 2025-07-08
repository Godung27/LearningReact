import imgReact from "./assets/react-core-concepts.png"

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const descriptions = reactDescriptions[genRandomInt(reactDescriptions.length)];

  return (
    <header>
      <img src={imgReact} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header /> {/*same but the end of code as "img" must have /> */}
      {/* <Header></Header> */}
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
