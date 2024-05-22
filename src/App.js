import './App.css';
import { 
    BrowserRouter as Router, Routes, 
    Route 
} from "react-router-dom"; 
import Home from './pages/PromoPage/Home.js';
import Nosotros from './pages/PromoPage/Nosotros.js'
import NotFound from './pages/404.js';
import Playground from './pages/Playground.js';

function App() {
  return (
      <>
        <Router>
            <Routes>
                <Route 
                    exact
                    path = '/'
                    element={<Home />}
                />
                <Route 
                    path='/nosotros'
                    element = {<Nosotros />}
                />


                <Route 
                    path='*'
                    element = {<NotFound />}
                />



                <Route 
                    path='/play'
                    element = {<Playground />}
                />
            </Routes>
        </Router>
      </>
  );
}

function clicksito(){
    console.log("boton click");
}

export default App;
