import './App.css';
import NotFound from "./pages/NotFound";
import N1 from "./pages/N1";
import N2 from "./pages/N2";
import N3 from "./pages/N3";
import Login from "./pages/Login";
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<N1 />} />
                    <Route path="/N2" element={<N2 />} />
                    <Route path="/N3" element={<N3 />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    )
}

export default App;
