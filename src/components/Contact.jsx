import React, { useState } from 'react';
import HomeStyle from './styles';
import dsnLogo from '../assets/img/dsn.png';
import gdgLogo from '../assets/img/gdg.png';
import heroImg from '../assets/img/hero.png';

const faqs = [
  {
    q: 'Who can participate?',
    a: 'Anyone with a passion for solving problems using technology — students, developers, designers, researchers, domain experts, etc.'
  },
  {
    q: 'Is it free to join?',
    a: 'Yes, participation is 100% free. Just bring your energy, laptop, and ideas.'
  },
  {
    q: 'Do I need a team before registering?',
    a: 'No. You can register solo. We’ll help with team formation before the hackathon begins.'
  },
  {
    q: 'What should I build?',
    a: 'A prototype or proof-of-concept solution related to your chosen track. Projects must use AI in a meaningful way.'
  },
  {
    q: 'Are there prizes?',
    a: 'Yes! We’ll award top projects per track, with a mix of cash prizes, swags, gadgets, and possible incubation offers.'
  },
  {
    q: 'Will food and internet be provided?',
    a: 'Yes. Meals, snacks, and high-speed internet will be available throughout the event.'
  },
  {
    q: 'Can I sleep at the venue?',
    a: 'Yes. Overnight access will be available. Bring anything you need to stay comfortable.'
  },
];

const Contact = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <HomeStyle>
      <div className="Header">
        <div className="logos">
          <img src={dsnLogo} alt="DSN Logo" />
          <img src={gdgLogo} alt="GDG Logo" />
        </div>
        <h1>DSN x GDG FUNAAB AI Hackathon 2025</h1>
      </div>
      <div className="HeroImage">
        <img src={heroImg} alt="Hackathon" />
      </div>
      <nav className="BlurNav">
        <button className="NavButton" onClick={() => onNavigate('home')}>Home</button>
        <button className="NavButton" onClick={() => onNavigate('about')}>About</button>
        <button className="NavButton" onClick={() => onNavigate('getinvolved')}>Get Involved</button>
        <button className="NavButton" onClick={() => onNavigate('contact')}>Contact</button>
      </nav>
      <main className="PageContent">
        <h2>Frequently Asked Questions</h2>
        <div style={{margin: '2rem auto', maxWidth: 600}}>
          {faqs.map((item, idx) => (
            <div key={idx} className={`faq-dropdown${openIndex === idx ? ' open' : ''}`} style={{marginBottom: '1.2rem', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(43,114,255,0.04)'}}>
              <button
                className="faq-question"
                onClick={() => toggle(idx)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'rgba(245,247,250,0.95)',
                  border: 'none',
                  outline: 'none',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  padding: '1rem 1.2rem',
                  borderRadius: '1rem',
                  cursor: 'pointer',
                  color: '#2b2b2b',
                  boxShadow: openIndex === idx ? '0 2px 12px rgba(43,114,255,0.08)' : 'none',
                  transition: 'box-shadow 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                aria-expanded={openIndex === idx}
              >
                <span>{item.q}</span>
                <span style={{fontSize: '1.3em', color: '#2b72ff', marginLeft: 12}}>{openIndex === idx ? '−' : '+'}</span>
              </button>
              <div
                className="faq-answer"
                style={{
                  maxHeight: openIndex === idx ? 200 : 0,
                  overflow: 'hidden',
                  background: 'white',
                  borderRadius: '0 0 1rem 1rem',
                  padding: openIndex === idx ? '1rem 1.2rem' : '0 1.2rem',
                  fontSize: '1rem',
                  color: '#444',
                  boxShadow: openIndex === idx ? '0 2px 12px rgba(43,114,255,0.04)' : 'none',
                  transition: 'all 0.25s cubic-bezier(.4,0,.2,1)',
                }}
              >
                {openIndex === idx && <div>{item.a}</div>}
              </div>
            </div>
          ))}
        </div>
        <h2>📬 Contact Us</h2>
        <p>For inquiries, sponsorship, or collaboration:</p>
        <ul style={{textAlign: 'left', margin: '0 auto', maxWidth: 600}}>
          <li>📧 <b>Email:</b> <a href="mailto:aiinnovatefunaab@gmail.com">aiinnovatefunaab@gmail.com</a></li>
          <li>📍 <b>Location:</b> Federal University of Agriculture, Abeokuta (FUNAAB)</li>
          <li>🌐 <b>Socials:</b> <a href="#">Twitter</a> | <a href="#">Instagram</a> | <a href="#">LinkedIn</a></li>
        </ul>
        <hr style={{margin: '2rem 0', border: 'none', borderTop: '1px solid #eee'}} />
        <h3>Organizing Team:</h3>
        <p>Co-hosted by Data Science Nigeria (DSN) and GDG FUNAAB</p>
        <p>We’re happy to hear from you!</p>
      </main>
      <footer className="Footer">
        Created with <span role="img" aria-label="love">❤️</span> by <a href="mailto:aboladeilerioluwakiiye@gmail.com">Ilerioluwakiiye</a>
      </footer>
    </HomeStyle>
  );
};

export default Contact;
