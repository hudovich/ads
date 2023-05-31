import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './UI/Home';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import stor from './service/store/store'
import { BrowserRouter, Route, Routes} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = stor.getState();
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={stor}>
      <Routes>
        <Route path="/*" element={<Home store={store}/>} />
        <Route path="/index" element={<Home store={store}/>} />
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
