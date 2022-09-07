import '../css/Contact.css'

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
                                            freew<br></br>
                                            tere
                                        </address>
                                        <h4>Tell:</h4>
                                        <h4>Fax:</h4>
                                        <h4>Queries:</h4>
                                        <p>Social Media Links</p>
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