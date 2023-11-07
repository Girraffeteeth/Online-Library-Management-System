import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import CreateBook from './components/CreateBook';
import BookLog from './components/BookLog';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<CreateBook/>}/>
          <Route path="/create-book" element={<CreateBook/>}/>
          <Route path="/book-log" element={<BookLog/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;