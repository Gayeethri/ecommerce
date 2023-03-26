import React from 'react';
import logo from './avatar.png'
import './ProfileOverview.css';


    
function ProfileOverview()
{
        return (
            <div className="user-profile-edit">
                <div className="header-section">
                    <div className="title">
                        <h3>Your Public Profile</h3>
                        <p>Everything on this page can be seen by anyone</p>
                    </div>
                </div>

                <form >
                    <div className="section">
                        <div className="label">
                            Profile Picture
                        </div>
                        
                        <div className="profile-pic">
                            <img src={logo} height={158} width={158}/>
                        </div>
                    
                        <input type="file"  id="profile-picture" />
                        <button className="normal-button" >Remove picture</button>
                        
                    </div>

                    <div className="section">
                        <div className="label">
                            Your Name
                        </div>
                        <input type="text" id="name" />
                    </div>

                    <div className="section">
                        <div className="label">
                            Gender
                        </div>

                        <div className="gender">
                            <div>
                            <input type="radio"  value='female' name="gender" /> 
                                <label htmlFor="female">Female</label>
                            </div>

                            <div>
                            <input type="radio"  value='male' name="gender"  /> 
                                <label htmlFor="male">Male</label>
                            </div>

                            <div>
                            <input type="radio" value='Other' name="gender" />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                    </div>

                    <div className="section">
                        <div className="label">
                            City
                        </div>
                        <input type="text" id="city" />
                    </div>

                    <div className="section">
                        <div className="label">
                            Birthday
                        </div>
                        <input type="date" />
                    </div>

                    <div className="section">
                        <div className="label">
                            About
                            <p>Tell people a little about yourself.</p>
                        </div>
                        <textarea id="about" cols="30" rows="10"></textarea>
                        
                    </div>

                    <button className="clicky">Save Changes</button>
                </form>
            </div>
            
                
        );
}

export default ProfileOverview;