import './Skill.css';
import html from '../../photos/html.png'
import css from '../../photos/css.png'
import javascript from '../../photos/javascript.jpeg'
import react from '../../photos/react.png'
import redux from '../../photos/redux.png'
import bootstrap from '../../photos/bootstrap.png'

const Skill = () => {
    const pics = [
        {
          id:1,
          photo: html, 
        },
        {
          id:2,
          photo: css,
        },
         {
           id:3,
           photo: javascript, 
        },
        {
          id:4,
          photo: react, 
        },
        {
          id:5,
          photo: redux, 
        },
        {
          id:6,
          photo: bootstrap, 
        },
    ]

    return (
        <div className='container-skill'>
            <h3 className='skills'>Skills</h3>
            <div className='skill'>
              {pics.map(item => (<img src={item.photo} alt={item.id} key={item.id} width='150px' height='150px'/>))}
            </div>
        </div>
            
    )
}

export default Skill;