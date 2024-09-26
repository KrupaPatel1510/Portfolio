import React, { useRef } from 'react';
import './ContactFormStyle.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import cartoon from '../images/cartoon-compressed.png';

export default function ContactForm({ id }) {

  return (
    <div className='contact-window' id={id}>
      <div class="contact">
        <div class="contact-about"><h1>Contact</h1></div>
        <div class="contact-main">
          <div class="contact-name">Krupa Patel</div>
          <div class="contact-mail">Krupaapatel466@gmail.com</div>
        </div>
        <div class="contact-sub">
          <div class="contact-number"><a href="https://wa.me/9925899722/">+919925899722</a></div>
          <div class="contact-address">28 shrinathji bunglows near karnavati park opp baroda expp highway ahmedabad</div>
        </div>
      </div>
    </div>
  )
}