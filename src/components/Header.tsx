import { FaArrowRight, FaCartPlus } from 'react-icons/fa';
import logo from '../images/divine-logo.jpg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='fixed w-full lg:flex justify-between bg-green-700 text-white py-2 px-4 sm:block sm:m-auto sm:align-middle'>
      <div className='flex justify-center p-2 lg:w-[22%] font-semibold sm:w-full'>
        <img src={logo} alt="Logo" className='w-10 h-10 mr-4' />
        <h1 className="text-2xl">
         DivineProwessStore 
        </h1>
      </div>
      <div className='flex justify-center lg:w-[60%] sm:w-full'>
        <input type="text" placeholder='Search' className='bg-white text-black w-[90%] px-4 py-2 rounded-l-sm' />
        <FaArrowRight className='my-auto text-black bg-green-300 size-14 p-4 rounded-r-sm' />
      </div>
      <div className='flex justify-center p-2 lg:w-[18%] font-semibol sm:w-full'>
        <span className='mr-10 text-2xl'>Orders</span>
        <Link to='/checkout' className='flex justify-center'>
          <FaCartPlus className='text-4xl mr-2' />
          <span className='text-2xl'>Cart</span>
        </Link>
      </div>
    </div>
  );
}

export default Header;