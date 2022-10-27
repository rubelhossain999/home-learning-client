import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Userprofile from '../Profile/Userprofile';
import Dark from './Dark';


const DarkIcon = () => {

    const [colorTheme, setTheme] = Dark();
    return (
        <div className="navbar-end">
            <Userprofile></Userprofile>
            <div onClick={() => setTheme(colorTheme)}>
                {colorTheme === "light" ? <FontAwesomeIcon className='text-3xl text-white dark:bg-slate-600 cursor-pointer' icon={faLightbulb}></FontAwesomeIcon>
                    :
                    <FontAwesomeIcon className='text-3xl text-black cursor-pointer' icon={faMoon}></FontAwesomeIcon>
                }

            </div>
        </div >

    );
};

export default DarkIcon;