import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'


// array
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Flare 2023',
    github: 'https://github.com/RohanMatre',
    demo: 'https://flare.osailpdeu.in'
  },
  {
    id: 2,
    image: IMG2,
    title: 'College Website',
    github: 'https://github.com/RohanMatre/College-Website',
    demo: 'https://drive.google.com/file/d/1sm_bFZchJl8e7tGADBMbArjoIio6AwHn/view?usp=sharing'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Money Application(Figma)',
    github: 'https://github.com/RohanMatre/UI-UX-Design',
    demo: 'https://drive.google.com/file/d/1sJdXvSp5Llg8eciZeSp__0OYksjmaCqt/view?usp=sharing'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Spotify Clone',
    github: 'https://github.com/RohanMatre/Spotify-Clone',
    demo: 'https://drive.google.com/file/d/1-5tNXXzPWALRQUvMml_z7qQKoOU0-HZ8/view?usp=sharing'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Secrets App using ReactJs',
    github: 'https://github.com/RohanMatre/Secrets-App',
    demo: 'https://drive.google.com/file/d/1TF0s3_LHd1K45qU94g5fphjxeu3CprEN/view?usp=sharing'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Simon Game',
    github: 'https://github.com/RohanMatre/Simon-Game',
    demo: 'https://drive.google.com/file/d/1jt9_1Orz4aGYQP_pW3pGy_c3XFYijbHI/view?usp=sharing'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      {
        data.map(({id,image,title,github,demo}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio__item-cta'>
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio