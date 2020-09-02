import React from 'react';
import { Form, Button } from "react-bootstrap";
import './App.scss';
import {CONSTANTS} from './constants';
import {SectionHeader} from './SectionHeader';
import { Skills } from './Skills';
import { Timeline } from "./Timeline";
import { Footer } from './Footer';
import { Projects } from './Projects';

function App() {
  return (
    <div className="App">
      <section className="home">
        <header className="header">
          <div className="logo">
            <h2><i className="fab fa-js-square"></i></h2>
          </div>
          <div className="navbar">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#professional">Professional</a>
            <a className="nav-link" href="#portfolio">Portfolio</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </header>
        <div className="name-container">
          <div className="name">
            <h1>Kyle Wilson-McCormack</h1>
            <p>Software Developer</p>
          </div>
        </div>
      </section>
      <section className="bio">
        <div className="summary">
          <div className="logo">
              <h2><i className="fab fa-js-square"></i></h2>
          </div>
          <p className="summary_text">My Name is Kyle Wilson-McCormack, I am a Software Developer who loves to learn and code. I believe with the help of technology we can continue to better the world. Code is not just about knowing a programming language, but knowing how to code efficiently.</p>
          <a href="./resume.pdf" target="_blank" class="button" download>Download Resume</a>
        </div>
        <SectionHeader number="01" title={CONSTANTS.SECTIONS[0].title} subtitle={CONSTANTS.SECTIONS[0].subtitle} />
        <Skills />
      </section>
      <section className="portfolio_experience">
        <div className="portfolio">
          <SectionHeader number="02" title={CONSTANTS.SECTIONS[1].title} subtitle={CONSTANTS.SECTIONS[1].subtitle} />
          <Projects />
        </div>
        <div className="experience">
          <SectionHeader number="03" title={CONSTANTS.SECTIONS[2].title} subtitle={CONSTANTS.SECTIONS[2].subtitle} />
          <Timeline />
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="contact_area">
          <div className="info">
            <h3>CONTACT</h3>
            <p>
            <span className="email">kyle.wilsonmccormack@gmail.com</span>
            <span className="telephone"><a href="tel:+14169880822"> Tel: 416-988-0822</a></span>
            </p>
          </div>
          <div className="form">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                I'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
