const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Itchy", animal: "Cat", breed: "Tuxedo" }),
    React.createElement(Pet, {
      name: "Parsnip",
      animal: "Dog",
      breed: "Labrador",
    }),
    React.createElement(Pet, { name: "Tesla", animal: "Cat", breed: "Calico" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.querySelector("#root"));
