import React from "react";
import Greetings from "./components/Greetings";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <h1>"Welcome to our store!"</h1>
      <Greetings name="John Hamilton" />
      <h2>Our Products</h2>
      <p>Product Name: iPhone 14</p>
      <Products name="iPhone 14" price="$999" />
      <Products name="MacBook Pro" price="$1999" />
      <Products name="iPad Pro" price="$799" />
    </div>
  );
}

export default App;