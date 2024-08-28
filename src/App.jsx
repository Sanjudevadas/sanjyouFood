import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from './components/Contact';
import Error from './components/Error';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path="*" element={<Error />} /> {/* Catch-all route for 404 errors */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
