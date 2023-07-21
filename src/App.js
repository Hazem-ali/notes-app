import './App.css';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import Note from './components/note';
const store = configureStore();

function App() {

  


  return (
    <Provider store={store}>
      <Note></Note>

    </Provider>
  );
}

export default App;
