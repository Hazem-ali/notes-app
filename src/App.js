import './App.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Notes from './components/notes';
const store = configureStore();

function App() {

  


  return (
    <Provider store={store}>
      <Notes></Notes>

    </Provider>
  );
}

export default App;
