import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Main from "./components/Main"
import {ConfigureStore} from "./redux/configureStore"
import './App.css';

 const store = ConfigureStore();

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main/>
        </div>
      </BrowserRouter>
      </Provider>
    
  );
}

export default App;
