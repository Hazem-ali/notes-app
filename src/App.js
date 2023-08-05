import "./App.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Notes from "./components/notes";
import NavBar from "./components/navBar";
import NoteForm from "./components/noteForm";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NavBar></NavBar>
      {/* <Notes></Notes> */}
      <NoteForm></NoteForm>
    </Provider>
  );
}

export default App;
