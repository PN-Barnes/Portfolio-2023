import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Header />
      <main className='mt-5 pt-5'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
