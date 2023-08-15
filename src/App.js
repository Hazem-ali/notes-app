import "./App.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import NavBar from "./components/navBar";
import MainRouter from "./routes/router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NavBar></NavBar>
      <MainRouter></MainRouter>
    </Provider>
  );
}

export default App;
