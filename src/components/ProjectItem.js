import coffee_connection from '../Assets/Images/coffee_connection.png';
import youtube from '../Assets/Images/youtube.png';
import movie_app from '../Assets/Images/movie_app.png';
import covid from '../Assets/Images/covid.png';
import coin from '../Assets/Images/coinsight.png';
import stream from '../Assets/Images/stream.png';
import baysbookland from '../Assets/Images/baysbookland.jpg';
import weather from '../Assets/Images/weather.png';
import task from '../Assets/Images/task.png';
import affirmations from '../Assets/Images/affirmations.png';

const imgMap = {
  affirmations: affirmations,
  coffee_connection: coffee_connection,
  youtube: youtube,
  movie_app: movie_app,
  covid: covid,
  coin: coin,
  stream: stream,
  baysbookland: baysbookland,
  weather: weather,
  task: task,
};

const ProjectItem = ({ data }) => {
  return (
    <div className='project-item'>
      <div className='explanation-container'>
        <h3>{data.title}</h3>
        <p className='project-description'>{data.description}</p>
        <div className='technologies-used'>
          {data.technologies.map((tech) => (
            <span className='tech-span'>{tech}</span>
          ))}
        </div>
        <div className='btn-container'>
          <a className='btn_' href={data.link} target='_blank' rel='noreferrer'>
            {data.btnText}
          </a>
          {data.code_link.length > 0 && (
            <a
              className='btn_'
              href={data.code_link}
              target='_blank'
              rel='noreferrer'
            >
              GitHub
            </a>
          )}
        </div>
      </div>
      <img alt={data.title} src={imgMap[data.image]} />
    </div>
  );
};

export default ProjectItem;
