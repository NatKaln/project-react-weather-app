import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        This project was coded by Nat Kalnytska and is{" "}
        <a
          href="https://github.com/NatKaln/project-react-weather-app/tree/master/src"
          target="_balnk"
        >
          open-sourced on GitHub
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
