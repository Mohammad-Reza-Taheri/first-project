import MultiStepForm from './pages/MultiStepForm';

//Redux
import store from './Redux/store';
import { Provider } from 'react-redux';
function App() {
  return (
    // <div className="App">
      <Provider store={store}>
      <MultiStepForm/>
      </Provider>
    // </div>
  );
}

export default App;
