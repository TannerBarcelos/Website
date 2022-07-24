/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => {
  return (
    <div className='section_container' id='home'>
      <div className='hero-content'>
        <div className='headline'>
          <h1>Hi,I'm Tanner</h1>
          <span>Senior Full Stack Software Engineer at Visa</span>
        </div>
        <div className='contact-container'>
          <a
            className='contact-me-cta'
            href='mailto:barcelos.m.tanner@gmail.com?subject=Reaching Out'
            target='_blank'
          >
            Contact Me
          </a>
          <a
            className='resume-cta'
            href='https://drive.google.com/file/d/19TdAEUmc1jlK7p-fikhZCA8D1wfG7dgS/view?usp=sharing'
            target='_blank'
          >
            Resume
          </a>
        </div>
      </div>
      <div className='socials'>
        <a
          href='https://github.com/TannerBarcelos'
          target='_blank'
          title='GitHub Profile'
        >
          <i className='fab fa-github'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/tanner-barcelos-695619a1/'
          target='_blank'
          title='LinkedIn Profile'
        >
          <i className='fab fa-linkedin'></i>
        </a>
        <a
          href='https://www.youtube.com/channel/UCce_URD7JVNz9R4WuZH1X3g'
          target='_blank'
          title='Youtube Channel'
        >
          <i class='fab fa-youtube'></i>
        </a>
        <a
          href='https://tanner.hashnode.dev/'
          target='_blank'
          title='Hashnode Blog'
        >
          <i class='fab fa-hashnode'></i>
        </a>
        <a
          href='https://twitter.com/dev_with_tanner'
          target='_blank'
          title='Technical Twitter Profile'
        >
          <i class='fab fa-twitter'></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
