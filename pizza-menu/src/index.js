import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// Component: components name needs to start with uppercase letter
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // using inline stylings like this
  // return <h1 style={{color: 'red', fontSize: '2.5rem'}}>Fast React Pizza Co.</h1>;
  //or storing the styles in a variable or basically use an external css file.
  const style = {};
  return (
    // <h1 style={style} className="header">
    <header className="header">
      <h1 style={{ style }}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italic cuisine, 6 creative dishes to choose from. All from our
        stone oven, all organnic, all delicious
      </p>

      {/* Rendering Lists */}
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza curPizzaObj={pizza} key={pizza.name} />
        ))}
      </ul>

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ curPizzaObj }) {
  // if (curPizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${curPizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={curPizzaObj.photoName} alt={curPizzaObj.name} />
      <div>
        <h3>{curPizzaObj.name}</h3>
        <p>{curPizzaObj.ingredients}</p>

        <span>{curPizzaObj.soldOut ? "Sold out" : curPizzaObj.price}</span>

        {/*OR*/}
        {/* {curPizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{curPizzaObj.price}</span>
        )} */}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour; // returns true or false
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We are currently open");
  // else alert("Sorry we are closed ");

  return (
    <footer className="footer">
      <div className="order">
        {isOpen ? (
          <Order openHours={openHour} />
        ) : (
          <p>We are currently closed until {closeHour}:00</p>
        )}
        <button className="btn">Order</button>
      </div>
      {/* {new Date().toLocaleTimeString()} We are currently open! */}
    </footer>
  );
}

function Order({ openHours }) {
  return (
    <div className="order">
      <p>"We are currently open till {openHours}:00</p>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
