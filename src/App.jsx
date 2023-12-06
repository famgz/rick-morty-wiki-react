import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import Episodes from './Pages/Episodes';
import Locations from './Pages/Locations';
import CardDetails from './components/Cards/CardDetails';

function App() {
    return (
        <Router>
            <div className='App'>
                <Navbar />
            </div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/episodes' element={<Episodes />} />
                <Route path='/locations' element={<Locations />} />
                <Route path='/character/:id' element={<CardDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
