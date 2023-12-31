import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login/Login";
import Registration from "./components/Login/Registration/Registration";
import Logout from "./components/Login/Logout/Logout";
import Give from "./components/Giveout/Give/Give";




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path ='logowanie' element={<Login/>}/>
                <Route path ='rejestracja' element={<Registration/>}/>
                <Route path ='wylogowanie' element={<Logout/>}/>
                <Route path ='oddaj-rzeczy' element={<Give/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
