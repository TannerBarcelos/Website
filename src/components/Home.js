/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Home = () => {
  return (
    <div className='section_container' id='home'>
      <div className='hero-content'>
        <div className='headline'>
          <h1>Hi, I'm Tanner</h1>
          <span>
            Senior Software Engineer @ Visa. Researcher. Computer Scientist.
          </span>
        </div>
        <div className='socials'>
          <a href='https://github.com/TannerBarcelos' target='_blank'>
            <i className='fab fa-github'></i>
          </a>

          <a
            href='https://www.linkedin.com/in/tanner-barcelos-695619a1/'
            target='_blank'
          >
            <i className='fab fa-linkedin'></i>
          </a>

          <a
            href='https://drive.google.com/file/d/19TdAEUmc1jlK7p-fikhZCA8D1wfG7dgS/view?usp=sharing'
            target='_blank'
          >
            <i className='far fa-file'></i>
          </a>

          <a href='https://medium.com/@tannerbarcelos' target='_blank'>
            <i class='fab fa-medium'></i>
          </a>
        </div>
        <a
          className='contact-me-cta'
          href='mailto:barcelos.m.tanner@gmail.com?subject=Reaching Out'
          target='_blank'
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Home;
