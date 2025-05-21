import React from 'react';
import HomeStyle from './styles';
import dsnLogo from '../assets/img/dsn.png';
import gdgLogo from '../assets/img/gdg.png';
import heroImg from '../assets/img/hero.png';

const About = ({ onNavigate }) => (
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
      <h2>About the Hackathon</h2>
      <p>AI INNOVATE 2025 is a 72-hour hackathon designed to challenge the next generation of AI innovators to build practical solutions for real-world problems across key sectors. Organized by Data Science Nigeria (DSN) and Google Developer Groups (GDG) FUNAAB, this event promotes cross-disciplinary collaboration and innovation with lasting impact.</p>
      <hr style={{margin: '2rem 0', border: 'none', borderTop: '1px solid #eee'}} />
      <h2>Theme: “Building Impactful Solutions Across Industries”</h2>
      <p>Participants will form teams, select a problem under one of four critical domains, and build prototypes using artificial intelligence and related technologies.</p>
      <hr style={{margin: '2rem 0', border: 'none', borderTop: '1px solid #eee'}} />
      <h2>Tracks: What You’ll Solve For</h2>
      <ul>
        <li>Healthcare: Improve diagnostics, maternal care, health record systems, and access to medical services.</li>
        <li>Finance: Create tools that foster financial inclusion, automate fraud detection, and enhance transparency.</li>
        <li>Law & Policy: Innovate in legal tech, justice systems, and civic tech with AI solutions that promote fairness and accessibility.</li>
        <li>Education: Design AI tools to support personalized learning, literacy, and educational equality.</li>
      </ul>
      <hr style={{margin: '2rem 0', border: 'none', borderTop: '1px solid #eee'}} />
      <h2>How It Works</h2>
      <ul>
        <li>🧑🏽‍💻 <b>Team Formation:</b> Teams of 4–5 with varied backgrounds (AI, frontend, backend, design, domain experts).</li>
        <li>🧭 <b>Challenge Selection:</b> Teams pick a track and identify a problem worth solving.</li>
        <li>⚒️ <b>72-Hour Sprint:</b> Intense, mentor-guided building time.</li>
        <li>🎤 <b>Demo Day:</b> Final presentations before a judging panel.</li>
      </ul>
      <hr style={{margin: '2rem 0', border: 'none', borderTop: '1px solid #eee'}} />
      <h2>Timeline At A Glance</h2>
      <ul>
        <li>May 16: Registration Opens</li>
        <li>June 7: Registration Closes</li>
        <li>June 11–13: Hackathon Days</li>
        <li>June 14: Project Submission & Winner Announcement</li>
      </ul>
      <hr style={{margin: '2rem 0', border: 'none', borderTop: '1px solid #eee'}} />
      <h2>Who’s Behind This?</h2>
      <p>This event is a collaboration between:</p>
      <ul>
        <li><b>Data Science Nigeria (DSN):</b> Empowering Africans through data science and AI.</li>
        <li><b>Google Developer Groups (GDG) FUNAAB:</b> Community of developers passionate about building with Google technologies.</li>
      </ul>
      <p>Together, we’re fostering local innovation with global relevance.</p>
    </main>
    <footer className="Footer">
        Created with <span role="img" aria-label="love">❤️</span> by <a href="mailto:aboladeilerioluwakiiye@gmail.com">Ilerioluwakiiye</a>
      </footer>
  </HomeStyle>
);

export default About;
