import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">
        Late night session with Tailwind + React!
      </h1>
      <Card username = "Samantha" btnText = "Visit Me!"/>
      <Card username = "Leah" btnText = "Click Me!"/>
    </>
  );
}

export default App;
