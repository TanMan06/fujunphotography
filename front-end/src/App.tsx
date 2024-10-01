import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/Home';
import ContactForm from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;