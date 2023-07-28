import Navbar from './components/Navbar';
import Home from './components/Home'
import productReducer from './reducers/productsReducer'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function App() {
  const store = createStore(productReducer);

  return (
    <Provider store={store}>
      <div className="App">
          <Navbar />
          <Home />
      </div>
    </Provider>
  );
}

export default App;
