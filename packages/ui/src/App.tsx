import ReactDOM from "react-dom";
import React from "react";
import "./index.scss";
import Footer from "./Footer";
import Header from "./Header";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div className="my-10">Home page contents</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
