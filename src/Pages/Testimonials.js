import TestimonialItem from '../Components/TestimonialItem';
import recs from '../Assets/Data/recs.json';

const Testimonials = () => {
  return (
    <div className='section_container' id='testimonials'>
      <h1 className='section__heading'>Testimonials</h1>
      <div className='recommendation_container'>
        {recs.map((rec) => (
          <TestimonialItem data={rec} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
