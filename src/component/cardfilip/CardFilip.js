import './CardFilip.css';
import boy from '../../photos/boy.png';
import {BsGithub} from 'react-icons/bs';
import Tourism from '../../photos/Tourism.png';
import weatherapp from '../../photos/weatherapp.png';
import Crypto from '../../photos/Crypto.png';
import UiMaterial from '../../photos/UiMaterial.png';
import Mern from '../../photos/Mern.png';
import TypeScript from '../../photos/TypeScript.png';


const Card = () => {
    const projects =[
        {
            id:1,
            link:"https://github.com/ArashRahimipour/BMI-BMI",
            description:"BMI Calc",
            img:boy,
        },
        {
            id:2,
            link:"https://github.com/ArashRahimipour/weather-app",
            description:"Weather-App",
            img:weatherapp,
        },
        {
            id:3,
            link:"https://github.com/ArashRahimipour/Crypto",
            description:"Crypto-App",
            img:Crypto,
        },
        {
            id:4,
            link:"https://github.com/ArashRahimipour/Material-Ui-App",
            description:"Scoial-App",
            img:UiMaterial,
        },
        {
            id:5,
            link:"https://github.com/ArashRahimipour/Tourism-web-Tailwind",
            description:"Tourism-Tailwind",
            img:Tourism,
        },
        {
            id:6,
            link:"https://github.com/ArashRahimipour/Mern",
            description:"Mern-App",
            img: Mern,
        },
        {
            id:7,
            link:"https://github.com/ArashRahimipour/Shopping-Motorbike-Typescript",
            description:"Scoial-App",
            img:TypeScript,
        },
        
    ]
  
    return(
    <div className='box'>
        <div className='card'>
            <div className='front'>
              {projects.map(item => (<img src={item.img} key={item.id} alt={item.id} height="200px" width="250px"/>))}
            </div>
        </div>
        <div className='details'>
            {projects.map(item => (<a href={item.link}><BsGithub/></a>))}
        </div>
    </div>
        
        // <div className='card'>
        //     <div className='front'>
        //         <div className='boy'>
        //             <img src={boy} alt="/"/>
        //             <div className='back'>
        //                 <div className='back-content'>
        //                     <h2 className='bmi'>BMI Calculator</h2>
        //                     <p className='ex'> React.js</p>
        //                 </div>    
        //                 <div className='project'>
        //                     <a href='https://github.com/ArashRahimipour/BMI-BMI'><BsGithub className='link1'/></a>
        //                     <a href='/'><MdOutlineSportsFootball className='link2'/></a>
        //                 </div>
        //             </div>     
        //         </div>


        //         <div className='weather'>
        //             <img src={weatherapp} alt="/"/>
        //             <div className='back'>
        //                 <div className='back-content'>
        //                     <h2 className='bmi'>Weather-app</h2>
        //                     <p className='ex'> React.js</p>
        //                 </div>   
        //                 <div className='project'>
        //                     <a href='https://github.com/ArashRahimipour/weather-app'><BsGithub className='link1'/></a>
        //                     <a href='/'><TiWeatherSnow className='link2'/></a>
        //                 </div>
        //             </div>     
        //         </div>

        //         <div className='Crypto'>
        //             <img src={Crypto} alt="/"/>
        //             <div className='back'>
        //                 <div className='back-content'>
        //                     <h2 className='bmi'>Crypto</h2>
        //                     <p className='ex'> React.js</p>
        //                 </div>   
        //                 <div className='project'>
        //                     <a href='https://github.com/ArashRahimipour/Crypto'><BsGithub className='link1'/></a>
        //                     {/* <a href='/'><BsCoin className='link2'/></a> */}
        //                 </div>
        //             </div>     
        //         </div>
        //         <div className='material-ui'>
        //             <img src={UiMaterial} alt="/"/>
        //             <div className='back'>
        //                 <div className='back-content'>
        //                     <h2 className='bmi'>Material-Ui-Project</h2>
        //                     <p className='ex'> React.js</p>
        //                 </div>   
        //                 <div className='project'>
        //                     <a href='https://github.com/ArashRahimipour/Material-Ui-App'><BsGithub className='link1'/></a>
        //                     <a href='/'></a>
        //                 </div>
        //             </div>     
        //         </div>
        //     </div>
        // </div>
               
  
        
    )
}
export default Card;