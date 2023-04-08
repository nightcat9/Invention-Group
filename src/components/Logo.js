import InventionLogo from '../images/logo-option2.png';
import '../styles/Logo.css';


function Logo() {
    return (
        <div className='logo-img'>
            <img src={InventionLogo} alt="The invention group logo" width="67%" />
        </div>    
    );
}

export default Logo;