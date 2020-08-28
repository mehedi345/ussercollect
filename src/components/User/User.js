import React from 'react';
import './User.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



const User = (props) => {
   console.log(props)
    return (
        <div className="user">
            <div className="user-container">
                <div>
                    <img src={props.user.picture.large} ></img>
                </div>
                <div className="user-content">
                    <h3>name: {props.user.name.title + ' ' + props.user.name.first + " " + props.user.name.last}</h3>
                    <p>email: {props.user.email}</p>
                    <p>phone: {props.user.phone}</p>
                    <p>address: {props.user.location.city + " , " + props.user.location.country}</p>
                    <button onClick={() => props.handleAddUser(props.friends)}> <FontAwesomeIcon icon={faPlus} /></button>
                </div>
            </div>
            <div className="cart-container">
            <h1>this is cart</h1>
        </div>
        </div>
        
    );
};

export default User;