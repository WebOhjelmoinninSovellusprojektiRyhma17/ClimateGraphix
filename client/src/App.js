import './App.css';
import NotFound from './components/pages/NotFound';
import N1 from './components/pages/N1';
import N2 from './components/pages/N2';
import N3 from './components/pages/N3';
import LoginSignUp from './components/pages/LoginSignUp';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
    return (
        <>
            <NavBar />
            <div>
                <Routes>
                    <Route path="/" element={<N1 />} />
                    <Route path="/N2" element={<N2 />} />
                    <Route path="/N3" element={<N3 />} />
                    <Route path="/loginsignup" element={<LoginSignUp/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}

export default App;