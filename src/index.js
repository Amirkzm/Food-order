import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import CartContextProvider from "./store/Cart-provider";

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,
  document.getElementById("root")
);
// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
