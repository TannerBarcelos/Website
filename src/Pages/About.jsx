import TechnologyItem from '../Components/TechnologyItem.jsx';
import Me from '../Assets/Images/me.jpg';
import iconArray from '../icons';

const About = () => {
  return (
    <div className='section_container' id='about'>
      <div className='about'>
        <h1 className='section__heading'>About me</h1>
        <div className='section__content'>
          <img alt='profile' src={Me} style={{ borderRadius: '50%' }} id='me' />
          <p>
            My name is Tanner Barcelos and I am a Senior Full-Stack Software
            Engineer at Visa working on the Large Scale Data Platform Team. I
            currently have 1 years experience building, shipping and maintaining
            large scale, user facing distributed applications. I graduated from
            CSU East Bay with a degree in Computer Science with Deans honors.
            Below are some of the skills and tools I have experience with.
          </p>
          <div className='technologies_container'>
            {iconArray.map((icon, i) => (
              <TechnologyItem key={i} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
