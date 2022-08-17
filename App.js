import './App.css';
import PaymentComponent from './components/PaymentComponent';
import NavbarComponent from './components/NavbarComponent';
// import SubmitComponent from './components/SubmitComponent';
import './styles.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ResultComponent from './components/ResultComponent';
import SubmitComponent from './components/SubmitComponent';
import SubmitComponent1 from './components/SubmitComponent1';
import Res from './components/Res';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <BrowserRouter>
      <Routes>
    
      
        <Route path='/' element={<PaymentComponent />} >
      {/* <SubmitComponent /> */}
      
        </Route>
  
        <Route path='/submit' element={<SubmitComponent/>} />
        <Route path='/submit1' element={<SubmitComponent1 />} />
          {/* element={<SubmitComponent />} */}
          <Route path='/Res' element={<Res />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );

  App.get('/cors', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.send({ "msg": "This has CORS enabled 🎈" })
    })

  
}

export default App;