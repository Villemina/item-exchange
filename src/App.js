
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Organization from './components/Organizations';
import Local from './components/Local';

function App() {
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/" element={<Organization/>} />
                <Route path="/" element={<Local/>} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;