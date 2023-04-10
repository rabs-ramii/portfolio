import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Qualification from './components/Qualification';
import Project from './components/Project';
import Skill from './components/Skill';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
function App()
{
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/Qualification' element={<Qualification/>} />
                     <Route path='/Project' element={<Project/>} />
                    <Route path='/Skill' element={<Skill />} />
                     <Route path='/About' element={<About/>} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Login' element={<Login/>} />
                    
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );      
}
export default App;