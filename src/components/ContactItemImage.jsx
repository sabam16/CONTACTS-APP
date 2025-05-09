import React from 'react';
import ContactList from './ContactList';
     
function ContactItemImage({ imageUrl }) {
 return (
   <div className="contact-item__image">
     <img src={imageUrl} alt={ContactList.name}/>
   </div>
 );
}
 
export default ContactItemImage;