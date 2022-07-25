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
          <a
            className='resume-cta'
            href='https://linktr.ee/tannermbarcelos'
            target='_blank'
          >
            Socials
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
