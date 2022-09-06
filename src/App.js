import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeView from './views/HomeView';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomeView/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
