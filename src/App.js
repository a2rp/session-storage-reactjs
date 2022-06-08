import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    let page_view = sessionStorage.getItem("page_view");
    if (page_view==null) {
      page_view = 1;
    }
    else {
      page_view = Number(page_view) + 1;
    }
    sessionStorage.setItem("page_view", page_view);
    setCount(page_view);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React:: page count = {count}
        </a>
      </header>
    </div>
  );
}

export default App;
