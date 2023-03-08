import InventionLogo from '../images/ps-logo-large.png';
import '../styles/Logo.css';


function Logo() {
    return (
        <div className='logo-img'>
            <img src={InventionLogo} alt="The invention group logo" width="57%" />
        </div>    
    );
}

export default Logo;