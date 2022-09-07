

// function Home(props){
//     return(
//         <div className="Container">

//         </div>
//     )
// }
// export default Home;

// import Rooms from './components/rooms';
// import { useHistory} from  'react-router-dom';
// import {Link} from "react-router-dom"
// import   {useState} from 'react'
// import confimg from '../Services/Conference Room.jpg'
// import spaimg from '../Services/Spa.jpg'
// import buffimg from '../Services/Buffet.jpg'
// import singimg from '../Rooms/single.jpg'
// import famimg from '../Rooms/FamilyQuad.jpg'
// import pressimg from '../Rooms/PresidentialGuest.jpg'





const Home = () => {
    return (
        <>
//             <header className="header" id="header">
//                 <div className="head-top">
//                     <div className="site-name">
//                         <span>Hopewells Garden</span>
//                     </div>
//                     <div className="site-nav">
//                         <span id="nav-btn">MENU <i className="fas fa-bars"></i></span>
//                     </div>
//                 </div>
//                 <div className="head-button flex">
//                     <h2>NICE AND COMFORTABLE PLACE TO STAY</h2>
//                     <button type="button" className="head-btn">Log In</button>
//                     <button type="button" className="head-btn">Sign Up</button>
//                 </div>
//             </header>

//             <div className="sidenav" id="sidenav">
//                 <span className="cancel-btn" id="cancel-btn">
//                     <i className="fas fa-times"></i>
//                 </span>

//                 <ul className="navbar">
//                     <li className=" #header">
//                         <a href="/">Home</a></li>
//                     <li><a href="/About">About</a></li>
//                     <li><a href="/Contacts" >Contacts</a></li>
//                     <li><a href="/Rooms" >Rooms</a></li>
//                     <li><a href="/Services" >Services</a></li>
//                 </ul>
//                 <button className="btn sign-up">sign up</button>
//                 <button className="btn sign-up">log in</button>
//             </div>


//             <div className="book">
//                 <form className="book-form">
//                     <div className="form-item">
//                         <label for="checkin-date">Check In Date:</label>
//                         <input type="date" id="checkin-date" />
//                     </div>
//                     <div className="form-item">
//                         <label for="checkout-date">Check Out Date:</label>
//                         <input type="date" id="checkout-date" />
//                     </div>
//                     <div className="form-item">
//                         <label for="adult">Adult: </label>
//                         <input type="number" min="1"  max="5" id="adult" />
//                     </div>
//                     <div className="form-item">
//                         <label for="children">Children: </label>
//                         <input type="number" min="1" max="5" id="children" />
//                     </div>
//                     <div className="form-item">
//                         <label for="rooms">Rooms: </label>
//                         <input type="number" min="1" max="10" id="rooms" />
//                     </div>
//                     <div className="form-item">
                        
//                         <input type="submit" className="btn" value="Book Now" />
                        
//                     </div>
//                 </form>
//             </div>

//             <section className="services sec-width" id="services">
//                 <div className='about'>
//                     <h2>About</h2>
//                     <p>Looking for a place to stay in Durban that is both contemporary and reasonably priced? In that case, Hopewell's Garden is a great option for you.<br></br> We offer practical short-term lodging in the bustling city center of KwaZulu-Natal. Make sure to reserve a room at our Award-Winning Express Hotel whether you are visiting Durban for business or pleasure.
//                         Since 2005, the hotel has established itself as a market niche and a top choice for international tourists, NGOs, corporate travelers, and government officials
//                         After a day spent taking advantage of all that Durban has to offer, our hotel is the perfect place to return to for a restful night's sleep, a delicious breakfast, and a peaceful evening as well as taking advantage of our jacuzzi, swimming pool and our ocean view.</p>
//                 </div>
//                 <div className="title">
//                     <h2>Services</h2>
//                 </div>
//                 <div className="services-container">

//                     <article className="service">
//                         <div className="service-image">
//                             {/* <img src={confimg} /> */}
//                         </div>
//                         <div className="service-text">
//                             <h3>Conference Room</h3>
//                         </div>
//                     </article>

//                     <article className="service">
//                         <div className="service-image">
//                             {/* <img src={spaimg} /> */}
//                         </div>
//                         <div className="service-text">
//                             <h3>Spa Area</h3>
//                         </div>
//                     </article>

//                     <article className="service">
//                         <div className="service-image">
//                             {/* <img src={buffimg} /> */}
//                         </div>
//                         <div className="service-text">
//                             <h3>Breakfast Area</h3>
//                         </div>
//                     </article>
//                 </div>
//             </section>

//             <section className="rooms sec-width" id="rooms">
//                 <div className="title">
//                     <h2>Rooms</h2>
//                 </div>
//                 <div className="rooms-container">

//                     <article className="room">
//                         <div className="room-image">
//                             {/* <img src={singimg} /> */}
//                         </div>
//                         <div className="room-text">
//                             <h3>Single Room</h3>
//                             <p className="rate">
//                                 <span>R650 /</span> Per Night
//                             </p>
//                         </div>
//                     </article>

//                     <article className="room">
//                         <div className="room-image">
//                             {/* <img src={famimg} /> */}
//                         </div>
//                         <div className="room-text">
//                             <h3>Single Room</h3>
//                             <p className="rate">
//                                 <span>R1050 /</span> Per Night
//                             </p>
//                         </div>
//                     </article>

//                     <article className="room">
//                         <div className="room-image">
//                             {/* <img src={pressimg} /> */}
//                         </div>
//                         <div className="room-text">
//                             <h3>Single Room</h3>
//                             <p className="rate">
//                                 <span>R1500 /</span> Per Night
//                             </p>
//                         </div>
//                     </article>
//                 </div>
//             </section>

//             <footer className="footer">
//                 <div className="footer-container">
                    <div>
                      <ul className="social-icons">
                            <li className="flex">
                                <i className="fab fa-facebook-f"></i>
                            </li>
                           <li className="flex">
                               <i className="fab fa-twitter"></i>
                          </li>
                          <li className="flex">
                               <i className="fab fa-linkedin"></i>
                           </li>
                           <li className="flex">
                               <i className="fab fa-instagram"></i>
                          </li>
                      </ul>
                 </div>
              </div>
           </footer>

//             <h2>Contact Us</h2>
//             <div className="contact-item">
//                 <span>
//                     <i className="fas fa-map-marker-alt"></i>
//                     <span>
//                        376 airlie st.Durban, KwaZulu Natal, South Africa
//                     </span>
//                 </span>
//             </div>
//             <div className="contact-item">
//                 <span>
//                     <i className="fas fa-envelope"></i>
//                     <span>
//                         hopewellgarden@hotmail.co.za
//                     </span>
//                 </span>
//             </div>
//             <div className="contact-item">
//                 <span>
//                     <i className="fas fa-phone-alt"></i>
//                     <span>
//                         (011)325-2022
//                     </span>
//                 </span>
//             </div>
        </>
    )
}

export default Home;
