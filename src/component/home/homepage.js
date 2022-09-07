// import SignIn from './component/logSignIn/login.js';
// import SignUp from './component/logSignIn/signup.js';
import Rooms from '../rooms/rooms';
import Contact from '../contact/Contact'
import Services from '../services/services'
import About from '../about/About';
import SignIn from './login';
import image2 from '../images/Tennis Court.jpg'
import {Link} from 'react-router-dom'
// import Homepage from '../homepage/home'


function HomePage(){
    return(
        <div className="Container">

            <div className="top-part">
                <h1 className="logo">Hopewell's Garden</h1>
                <div className='menu-part '>
                <a className="menu"><Link to="/">Home</Link></a>
                    <a className="menu"><Link to="/About">About Us</Link></a>
                    <a className="menu"><Link to="/Rooms">Rooms</Link></a>
                    <a className="menu"><Link to="/Contacts">Reviews</Link></a>
                    <a className="menu"><Link to="/Services">Services</Link></a>
                </div>
            </div>

            <div className="spa-div">
                        <img src={image2} className="tennis-court"></img>
                        
            </div>

            <div className="col-md-12 text-center">
                <h3 className="main-heading">About Us</h3>
                <div className="underline mx-auto"></div>
                <p className="info">Looking for a place to stay in Durban that is both contemporary and reasonably priced? In that case, Hopewell's Garden is a great option for you.<br></br> We offer practical short-term lodging in the bustling city center of KwaZulu-Natal.<br></br> Make sure to reserve a room at our Award-Winning Express Hotel whether you are visiting Durban for business or pleasure.<br></br>
                    Since 2005, the hotel has established itself as a market niche and a top choice for international tourists, NGOs, corporate travelers, and government officials.<br></br>
                    After a day spent taking advantage of all that Durban has to offer, our hotel is the perfect place to return to for a restful night's sleep, a delicious breakfast, and a peaceful evening as well as taking advantage of our jacuzzi, swimming pool and our ocean view.
                </p>
          </div>
            

        </div>




        
    )
}
export default HomePage;