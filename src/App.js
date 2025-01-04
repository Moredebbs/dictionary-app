import "./App.css";
import Dictionary from "./Dictionary";
import logo from "./logo.png";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="dico-logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <small>
          <footer className="App-footer">
            This project was coded by
            <a
              href="https://github.com/Moredebbs"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Moyinoluwa Owoeye
            </a>{" "}
            is{" "}
            <a
              href="https://github.com/Moredebbs/react-weather-app-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on Github
            </a>{" "}
            and{" "}
            <a
              href="https://react-mi-clima.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </small>
      </div>
    </div>
  );
}
