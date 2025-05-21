import React from 'react';
import HomeStyle from './styles';
import dsnLogo from '../assets/img/dsn.png'; // Replace with actual logo
import gdgLogo from '../assets/img/gdg.png'; // Replace with actual logo
import heroImg from '../assets/img/hero.png'; // Replace with actual image

const Home = ({ onNavigate }) => (
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
      <h2>What is AI INNOVATE 2025?</h2>
      <p>The DSN x GDG FUNAAB AI Hackathon is a 3-day, high-energy sprint where developers, designers, and domain experts come together to build AI-powered solutions in healthcare, finance, law, and education. Whether you're a student, engineer, or researcher, this is your chance to create meaningful impact and connect with an innovative tech community.</p>
      <h2>Why Join?</h2>
      <ul>
        <li>🧠 Work with top mentors in AI, ML, and software development</li>
        <li>🤝 Collaborate in multidisciplinary teams</li>
        <li>🎯 Tackle real-world challenges in high-impact sectors</li>
        <li>🏆 Win exciting prizes, swags, and potential incubation support</li>
        <li>🌍 Network with industry professionals and fellow innovators</li>
      </ul>
      <h2>Tracks You'll Build In</h2>
      <ul>
        <li>Healthcare – Improve diagnosis, access, and patient care</li>
        <li>Finance – Bring transparency, accessibility, and security</li>
        <li>Law & Policy – Streamline justice, legal aid, and civic systems</li>
        <li>Education – Enhance learning with personalization and access</li>
      </ul>
      <h2>Key Dates</h2>
      <ul>
        <li>📝 Registration Opens: May 16</li>
        <li>🔒 Registration Closes: June 7</li>
        <li>🚀 Hackathon: June 11–13</li>
        <li>🏁 Final Presentations & Prizes: June 14</li>
      </ul>
      <h2>Proudly Brought To You By</h2>
      <p>DSN x GDG FUNAAB | AI Innovate 2025 Organizing Team</p>
    </main>
    <footer className="Footer">
        Created with <span role="img" aria-label="love">❤️</span> by <a href="mailto:aboladeilerioluwakiiye@gmail.com">Ilerioluwakiiye</a>
      </footer>
  </HomeStyle>
);

export default Home;
