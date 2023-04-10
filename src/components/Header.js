import {Link} from 'react-router-dom';
function Header()
{
    return (
        <>
            <center>
                 <nav className='navbar'>
                <ul className="navbar-ul">
                    <li><Link to="/">Home</Link></li>
                        <li><Link to="/Skill">Skills</Link></li>
                        <li><Link to="/Project">Projects</Link></li>
                    <li><Link to="/Qualification">Qualifications</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
            </center>
           
          
        </> 
    );
}
export default Header;