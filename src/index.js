import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Invoices from './components/invoices';
import L2 from './components/L2';
import Cash from './components/Cash';


function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path= "/" element={<Invoices />} />
        <Route exact path= "/l2" element={<L2 />} />
        <Route exact path= "/cash" element={<Cash />} />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
