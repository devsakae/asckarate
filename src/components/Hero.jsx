import React from 'react';
import { FaCamera, FaInstagram, FaWhatsapp } from "react-icons/fa";

const link_instagram = 'http://www.instagram.com/ackkarate_'
const link_whatsapp = 'http://wa.me/+5548999486994'
const link_2torneiokarate = 'https://drive.google.com/drive/folders/1z7g2xG9y0H8rGA5OHzZ1-HqGeuL3AHs4'
const link_2trocafaixa = 'https://drive.google.com/drive/folders/1e_7kJsvvhEIi6jE9Cmw9_6_25D0nnikq'

const Hero = () => {
  return (
    <section className='hero section'>
      <div className='hero_text'> 
        <h2>ASC Karatê</h2>
        <div className='social'>
          <div className='social_link' onClick={ () => location.href = link_instagram }>
            <FaInstagram />
            <p className='social_name'>
              Instagram
            </p>
          </div>
          <div className='social_link' onClick={ () => location.href = link_whatsapp }>
            <FaWhatsapp />
            <p className='social_name'>
              WhatsApp
            </p>
          </div>
          <div className='social_link' onClick={ () => location.href = link_2torneiokarate }>
            <FaCamera />
            <p className='social_name'>
              Fotos do Torneio
            </p>
          </div>
          <div className='social_link' onClick={ () => location.href = link_2trocafaixa }>
            <FaCamera />
            <p className='social_name'>
              Fotos da Troca de faixas
            </p>
          </div>
          </div>
        <div>
          
        </div>
        </div>
      <div>
      </div>
    </section>
  );
};

export default Hero;
