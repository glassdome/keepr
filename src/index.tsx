import { render } from "react-dom";
import AppRouter  from './routers/AppRouter'
//import App from "./App";

const rootElement = document.getElementById("root");
//render(<App />, rootElement);
render(<AppRouter />, rootElement);
