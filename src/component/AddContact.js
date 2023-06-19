import React from "react";

class AddContact extends React.Component {
    render(){
        return (
            <div className="ui main">
                <h2> Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <hr></hr><label>Name</label>
                        <input type="text" name="name" placeholder="Name"/>
                    </div><br></br>
                    <div className="field">
                        <label>Contact</label>
                        <input type="text" name="contact" placeholder="Contact"/>
                    </div><br></br>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email"/>
                    </div><br></br>
                   <button className="ui button blue">Add</button> 
                </form>

            </div>
        )
    }
}
export default AddContact;