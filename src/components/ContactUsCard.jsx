import React from "react";
import Demo from "../images/contactUsDemoImage.jpg";
import "../SASS/_contactUs.scss";

function ContactUsCard(props) {
    return (
        <div className='contactUsCard'>
            <img
                className='contactUsImage'
                src={props.image || Demo}
                alt='profile'
            />
            <div className='contactUsInfo'>
                <div>{props.name}</div>
                <a className='phoneNum' href={`mailto:${props.email}`}>
                    <i className='fas fa-envelope' aria-hidden='true'></i> :{" "}
                    {props.email}
                </a>
                <a className='phoneNum' href={`tel: ${props.phone}`}>
                    <i className='fa fa-phone' aria-hidden='true'></i> :{" "}
                    {props.phone}
                </a>
            </div>
        </div>
    );
}

export default ContactUsCard;
