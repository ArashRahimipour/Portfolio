import './CardFilip.css';
import boy from '../../photos/boy.png';
import {BsGithub} from 'react-icons/bs';
import {MdOutlineSportsFootball} from 'react-icons/md';
import {FaHotel} from 'react-icons/fa';
import Tourism from '../../photos/Tourism.png';
import {TiWeatherSnow} from 'react-icons/ti';
import weatherapp from '../../photos/weatherapp.png';


const Card = () => {
  

    return(
        <div className='card'>
            <div className='front'>
                <div className='boy'>
                    <img src={boy} alt="/"/>
                    <div className='back'>
                        <div className='back-content'>
                            <h2 className='bmi'>BMI Calculator</h2>
                            <p className='ex'> React.js</p>
                        </div>    
                        <div className='project'>
                            <a href='/'><BsGithub className='link1'/></a>
                            <a href='/'><MdOutlineSportsFootball className='link2'/></a>
                        </div>
                    </div>     
                </div>

                <div className='tourism'>
                    <img src={Tourism} alt="/"/>
                    <div className='back'>
                        <div className='back-content'>
                            <h2 className='bmi'>Tourism</h2>
                            <p className='ex'> React.js</p>
                        </div>   
                        <div className='project'>
                            <a href='/'><BsGithub className='link1'/></a>
                            <a href='/'><FaHotel className='link2'/></a>
                        </div>
                    </div>     
                </div>

                <div className='weather'>
                    <img src={weatherapp} alt="/"/>
                    <div className='back'>
                        <div className='back-content'>
                            <h2 className='bmi'>Weather-app</h2>
                            <p className='ex'> React.js</p>
                        </div>   
                        <div className='project'>
                            <a href='/'><BsGithub className='link1'/></a>
                            <a href='/'><TiWeatherSnow className='link2'/></a>
                        </div>
                    </div>     
                </div>
            </div>
        </div>
               
  
        
    )
}
export default Card;