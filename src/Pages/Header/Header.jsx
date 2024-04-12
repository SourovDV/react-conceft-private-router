
import moment from 'moment';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center my-7'>
                <img src={logo} alt="" />
                <p className="text-xl font-semibold">Journalism Without Fear or Favour</p>
                <p className="text-xl font-semibold">{moment().format('MMMM-D-YYYY')}</p> 
            </div>
        </div>
    );
};

export default Header;