import React from "react";

import "./App.css";
import SearchMovie from "./components/SearchMovie";
function App() {
  return (
    <div className="conatainer">
      <h1 className="title">Movie Searcher</h1>
      <SearchMovie />
    </div>
  );
}

export default App;
