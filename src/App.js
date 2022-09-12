import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeView from './views/HomeView';
import NavBar from './components/NavBar';
import AboutView from './views/AboutView';
import MediaView from './views/MediaView';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomeView/>} />
      <Route path="/about" element={<AboutView/>} />
      <Route path="/media" element={<MediaView/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
