import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main/Main.jsx";
import React from "react";


function App() {

  return (
      <>
        <Header/>
        <div className="container">
          <Main/>
        </div>
      </>
  )
}

export default App
