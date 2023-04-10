
import dp2 from './images/dp2.png';
import thought from './images/thought.png';
import smiley from './images/smiley.png';
function Home()
{
    return (
        <>
                <img src={dp2} alt="profile pic" className="dp"/>
            <h1> Hi, I am <br/>Ram Prakash Chauhan</h1>
            <h2>WELCOME TO MY PORTFOLIO</h2>
            <img src={smiley} alt="smiley" className="smiley"/>
            <center>
                <img src={thought} alt="thought" className="thought"/>
                
            </center>
           
        </>
    );
}
export default Home;