import React from "react";

function Greetings({name}) {
  return (
    <div>
        <h2>Hello from the Greeting Component!</h2>
        <p>This is your first custom component in React.</p>
        <h3>Helo,{name}!</h3>
        <p>"Please take a look at our products below!"</p>
    </div>
  );
}
<div>
  <h2>Hello from the Greeting Component!</h2>
  <p>This is your first custom component in React.</p>
</div>
export default Greetings;
