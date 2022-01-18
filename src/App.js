import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/Spacestagram-website' element={<Homepage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
