import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomeView from './views/HomeView';
import NavBar from './components/NavBar';
import AboutView from './views/AboutView';
import MediaView from './views/MediaView';
import SitesView from './views/SitesView';
import InvestView from './views/InvestView';
import ContactView from './views/ContactView';
import {Helmet} from "react-helmet";

function App() {
    <Helmet>
      <meta charSet="utf-8" />
      <title>TimeCharge</title>
      <link rel="canonical" href="https://timechargenetwork.com/" />
      <meta name="description" content="TimeCharge Demo" />
    </Helmet>
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomeView/>} />
      <Route path="/about" element={<AboutView/>} />
      <Route path="/media" element={<MediaView/>} />
      <Route path='/sites' element={<SitesView/>} />
      <Route path='/invest' element={<InvestView/>} />
      <Route path='/connect' element={<ContactView/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
