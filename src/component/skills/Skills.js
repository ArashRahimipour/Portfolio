import './Skill.css';
import html from '../../photos/html.png'
import css from '../../photos/css.png'
import javascript from '../../photos/javascript.jpeg'
import react from '../../photos/react.png'
import redux from '../../photos/redux.png'
import bootstrap from '../../photos/bootstrap.png'
import next from '../../photos/next.png'
import tailwind from '../../photos/tailwind.png'
import material from '../../photos/material.png'
import the from '../../photos/th.jpeg'
import node from '../../photos/node.jpeg'
import Express from '../../photos/Express.png'
import mongodb from '../../photos/mongodb.jpg'

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
        {
          id:7,
          photo: next, 
        },
        {
          id:8,
          photo: tailwind, 
        },
        {
          id:9,
          photo: material, 
        },
        {
          id:10,
          photo: the, 
        },
        {
          id:11,
          photo: Express, 
        },
        {
          id:12,
          photo: node, 
        },
        {
          id:13,
          photo: mongodb, 
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