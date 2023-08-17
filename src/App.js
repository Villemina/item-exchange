import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login/Login";
import Registration from "./components/Login/Registration/Registration";
import Logout from "./components/Login/Logout/Logout";




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path ='login' element={<Login/>}/>
                <Route path ='registration' element={<Registration/>}/>
                <Route path ='logout' element={<Logout/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
