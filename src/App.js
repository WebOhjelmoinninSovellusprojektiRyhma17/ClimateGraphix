import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/Login';
import N1 from './components/pages/N1';
import N2 from './components/pages/N2';
import N3 from './components/pages/N3';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <NavBar />
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<N1 />} />
                    <Route path="/N2" element={<N2 />} />
                    <Route path="/N3" element={<N3 />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
            <Footer />
        </>
    )
}

export default App;
