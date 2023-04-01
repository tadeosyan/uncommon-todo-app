import { Provider } from "react-redux";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import configureStore from "@redux/configureStore";
import Router from "./components/Router";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}
