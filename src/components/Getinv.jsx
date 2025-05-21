import React from 'react';
import HomeStyle from './styles';
import dsnLogo from '../assets/img/dsn.png';
import gdgLogo from '../assets/img/gdg.png';
import heroImg from '../assets/img/hero.png';

const GetInvolved = ({ onNavigate }) => (
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
      <h2>There’s a Role for Everyone.</h2>
      <p>Whether you’re building, mentoring, sponsoring, or supporting — there’s a way to make AI INNOVATE 2025 better with you in it.</p>
      <hr style={{margin: '2rem 0', border: 'none', borderTop: '1px solid #eee'}} />
      <section>
        <h3>🔹 1. Participate as a Hacker</h3>
        <p>Bring your skills in AI/ML, software engineering, product design, or domain knowledge. Collaborate in a team and build something that matters.</p>
        <ul>
          <li><b>Team size:</b> 4–5</li>
          <li><b>Tracks:</b> Healthcare, Finance, Law & Policy, Education</li>
          <li><b>Perks:</b> Swags, mentorship, networking, prizes, and a shot at incubation.</li>
        </ul>
        <a href="#" className="CTAButton">Register Now</a>
      </section>
      <hr style={{margin: '2rem 0', border: 'none', borderTop: '1px solid #eee'}} />
      <section>
        <h3>🔹 2. Volunteer</h3>
        <p>Support event logistics, participant experience, check-in, or mentor/judge coordination. You don’t need to code to contribute!</p>
        <b>Roles include:</b>
        <ul>
          <li>Planning Assistants</li>
          <li>Social Media & Publicity</li>
          <li>Technical Support</li>
          <li>Logistics, Check-In, and more</li>
        </ul>
        <a href="#" className="CTAButton">Sign Up as a Volunteer</a>
      </section>
      <hr style={{margin: '2rem 0', border: 'none', borderTop: '1px solid #eee'}} />
      <section>
        <h3>🔹 3. Sponsor the Hackathon</h3>
        <p>Be part of the innovation. Position your brand at the center of a high-energy, high-impact AI event and connect with top talent.</p>
        <b>Sponsor benefits include:</b>
        <ul>
          <li>Branding across event assets</li>
          <li>Speaking opportunities</li>
          <li>Access to participant resumes</li>
          <li>Recruitment and mentorship exposure</li>
          <li>Post-event media coverage and reporting</li>
        </ul>
        <a href="#" className="CTAButton">Become a Sponsor</a>
      </section>
      <hr style={{margin: '2rem 0', border: 'none', borderTop: '1px solid #eee'}} />
      <section>
        <h3>🔹 4. Mentor or Judge</h3>
        <p>If you’re an expert in AI, product, or one of our focus domains, help guide teams or evaluate final projects.</p>
        <a href="#" className="CTAButton">Apply as a Mentor/Judge</a>
      </section>
      <hr style={{margin: '2rem 0', border: 'none', borderTop: '1px solid #eee'}} />
      <p><b>AI INNOVATE 2025 is not just a hackathon.</b><br />It’s a movement — and your skills, time, or support can shape its success.</p>
    </main>
    <footer className="Footer">
        Created with <span role="img" aria-label="love">❤️</span> by <a href="mailto:aboladeilerioluwakiiye@gmail.com">Ilerioluwakiiye</a>
      </footer>
  </HomeStyle>
);

export default GetInvolved;
