import '../css/Contact.css'
import twitter from '../images/Rooms/twitter.png'
import facebook from '../images/Rooms/facebook.png'
function ContactBody(){
    return(
        <div>

                    <div style={{display: 'flex', justifyContent: 'space-around', padding:'20px'}}>
                                    {/* <div>
                                        <p>What we offer</p>

                                    </div> */}
                                    <div>
                                        <h2>Contact Details</h2>
                                        <address>
                                        376 airlie st.Durban, KwaZulu Natal, South Africa
                                            <br></br>
                                            
                                        </address>
                                        <h4>Tell: (031)325-2022</h4>
                                        <h4>Fax:(031)325-2021</h4>
                                        <h4>Queries:hopewellgarden@hotmail.co.za </h4>
                                       
                                       
                                    </div>
                                    <div>
                                        <form>
                                            <input type="text" placeholder="Name"  style={{ padding:'10px', margin:'10px', width: '400px'}}/><br></br>
                                            <input type="email" placeholder="Email"  style={{ padding:'10px', margin:'10px', width: '400px'}}/><br>
                                            </br>
                                            <input type="text" placeholder="Contact Number"  style={{ padding:'10px', margin:'10px', width: '400px'}}/><br>
                                            </br>
                                            <textarea type="text" placeholder="Name"  style={{ padding:'20px', margin:'10px', width: '400px'}}/><br></br>
                                            <button style={{ padding:'10px', margin:'10px', width: '400px'}}>Send</button>
                                        </form>
                                    </div>
                        </div>


        </div>
    )
}

export default ContactBody;