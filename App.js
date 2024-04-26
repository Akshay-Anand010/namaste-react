import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React!"
);

//JSX

const elem = <span>React Element</span>

const Title =  (<h1 id="heading" className="head" tabIndex="5">
  {elem}
  Title Component
  </h1>
  );

  // React Components

  // Class Based components -Old
  // Function Based Components - New 

  //React Functional Component
  // Component Compositions
  const HeadingComponent = () => (
    <div id="container">
      {Title}
    <h1 className="heading">Namste React Functional Component</h1>
    </div>
  );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);

