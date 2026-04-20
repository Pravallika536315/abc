import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`app ${isDark ? 'dark-theme' : 'light-theme'}`}>
      {/* Header */}
      <header className={`sticky-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-section">
            <div className="logo">{'<DEV />'}</div>
          </div>

          <nav className="nav-links">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('work')} className="nav-link">Work</button>
          </nav>

          <div className="header-actions">
            <button className="theme-toggle" onClick={() => setIsDark(!isDark)} title="Toggle theme">
              {isDark ? '☀️' : '🌙'}
            </button>
            <a href="https://wa.me/yourphonenumber" className="hire-me-btn" target="_blank" rel="noopener noreferrer">
              <span>💬</span> Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">V Pravallika</h1>
            <h2 className="hero-title">Full Stack Developer | MERN Specialist</h2>
            <p className="hero-tagline">
              Crafting elegant solutions to complex problems. Building modern web experiences with React and Node.js.
            </p>
            <div className="hero-cta">
              <button className="cta-btn primary" onClick={() => scrollToSection('work')}>
                Explore Work
              </button>
              <a href="#" className="cta-btn secondary">
                Download Resume
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-placeholder">
              <div className="code-block">{'{ }'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="bio">
                I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. 
                Specializing in the MERN stack, I focus on creating intuitive user interfaces and robust backend systems 
                that drive real business value. I love solving complex problems and staying at the forefront of modern 
                web technologies.
              </p>
              <p className="bio">
                When I'm not coding, you'll find me contributing to open-source projects, writing tech articles, or 
                exploring emerging technologies like AI and Web3.
              </p>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="avatar">👨‍💻</div>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-icon">🎨</div>
                <p className="skill-name">HTML</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🎭</div>
                <p className="skill-name">CSS</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">⚡</div>
                <p className="skill-name">JavaScript</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">⚛️</div>
                <p className="skill-name">React</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🟢</div>
                <p className="skill-name">Node.js</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🍃</div>
                <p className="skill-name">MongoDB</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">📦</div>
                <p className="skill-name">Git</p>
              </div>
              <div className="skill-card">
                <div className="skill-icon">🔗</div>
                <p className="skill-name">APIs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="projects">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder-project">📱</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">E-Commerce Platform</h3>
                <p className="project-tagline">Modern online shopping experience</p>
                <p className="project-description">
                  A full-featured e-commerce platform with product catalog, shopping cart, payment integration, 
                  and admin dashboard built with React, Node.js, and MongoDB.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Node.js</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">Stripe</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-btn demo">Live Demo</a>
                  <a href="#" className="project-btn code">View Code</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder-project">💬</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Real-time Chat App</h3>
                <p className="project-tagline">Instant messaging with live notifications</p>
                <p className="project-description">
                  A real-time chat application featuring message encryption, user authentication, 
                  typing indicators, and online status using Socket.io and React.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Socket.io</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">JWT</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-btn demo">Live Demo</a>
                  <a href="#" className="project-btn code">View Code</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder-project">📊</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Analytics Dashboard</h3>
                <p className="project-tagline">Data visualization and insights</p>
                <p className="project-description">
                  An interactive analytics dashboard displaying real-time data with charts, graphs, 
                  and custom reports using Chart.js and React.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Chart.js</span>
                  <span className="tech-tag">REST API</span>
                  <span className="tech-tag">D3.js</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-btn demo">Live Demo</a>
                  <a href="#" className="project-btn code">View Code</a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder-project">🎬</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Movie Streaming App</h3>
                <p className="project-tagline">Watch movies and manage favorites</p>
                <p className="project-description">
                  A Netflix-inspired streaming application with user authentication, watchlist functionality, 
                  and integrated payment system.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">MongoDB</span>
                  <span className="tech-tag">AWS</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-btn demo">Live Demo</a>
                  <a href="#" className="project-btn code">View Code</a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder-project">📝</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Task Management Tool</h3>
                <p className="project-tagline">Collaborative productivity suite</p>
                <p className="project-description">
                  A comprehensive task management tool with team collaboration, real-time updates, 
                  file attachments, and project tracking features.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">Firebase</span>
                  <span className="tech-tag">Tailwind CSS</span>
                  <span className="tech-tag">Redux</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-btn demo">Live Demo</a>
                  <a href="#" className="project-btn code">View Code</a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="project-card">
              <div className="project-image">
                <div className="image-placeholder-project">🌐</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Weather Forecast App</h3>
                <p className="project-tagline">Real-time weather and climate data</p>
                <p className="project-description">
                  A weather application providing real-time forecasts, location-based data, 
                  multiple weather APIs integration, and beautiful data visualization.
                </p>
                <div className="project-tech">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">OpenWeather API</span>
                  <span className="tech-tag">Geolocation</span>
                  <span className="tech-tag">Axios</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-btn demo">Live Demo</a>
                  <a href="#" className="project-btn code">View Code</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="social-links">
              <h3 className="social-title">Connect With Me</h3>
              <div className="social-icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub">
                  🐙
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                  💼
                </a>
                <a href="https://www.hackerrank.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="HackerRank">
                  🏆
                </a>
                <a href="https://www.hackthebox.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Hack The Box">
                  📦
                </a>
                <a href="mailto:your@email.com" className="social-icon" title="Email">
                  ✉️
                </a>
              </div>
            </div>

            <form className="contact-form">
              <h3 className="form-title">Send Me a Message</h3>
              <div className="form-group">
                <input type="text" placeholder="Your Name" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" className="form-input" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Your Phone" className="form-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" className="form-input form-textarea" rows="5" required></textarea>
              </div>
              <button type="submit" className="form-submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-tagline">"Code is poetry written in logic."</p>
          <p className="footer-copyright">© 2024 V Pravallika. All rights reserved.</p>
          <button className="back-to-top" onClick={scrollToTop}>↑ Back to Top</button>
        </div>
      </footer>
    </div>
  );
}
