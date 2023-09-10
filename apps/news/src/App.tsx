import ReactDOM from "react-dom/client";
import React, { useState } from "react";

import "./index.scss";

// @ts-ignore
import Header from "micorfrontend_app/Header";
// @ts-ignore
import Footer from "micorfrontend_app/Footer";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">Home page contents from consumer</div>
      <button onClick={() => setCount(count + 1)}> Counter {count} </button>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
