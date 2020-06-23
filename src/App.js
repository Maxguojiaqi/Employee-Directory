import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";

function App() {
  return (
    // <Router>
      <div>
        <Header />
        <Wrapper>
        <Table/>
        <Footer />
        </Wrapper>
      </div>
    // </Router>
  );
}

export default App;
