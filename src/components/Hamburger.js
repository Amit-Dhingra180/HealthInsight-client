import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Hamburger = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClosed, setIsClosed] = useState(true);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClosed = () => {
    setIsClosed(!isClosed);
  };

  const location = useLocation();
  const currentPage = location.pathname;

  return (
    <div>

        <button onClick={() => {handleClick();handleClosed()}} className={`w-8 h-8 sm_md:w-10 sm_md:h-10 font-bold rounded-md bg-gray-200 transform transition-transform duration-500 ease-in-out z-10 ${isClicked ? ' translate-x-48' : '-translate-x-0'}`}>
          {'<'}
        </button>
        
        <div className={`fixed top-0 right-0 w-3/5 sm_md:w-1/2 md:w-2/5 lg:w-1/4 min-h-screen bg-gray-200 transform transition-transform duration-500 ease-in-out ${isClosed ? 'translate-x-full' : '-translate-x-0'}`}>
            
                <button onClick={() => {handleClick();handleClosed()}} className='m-4 text-3xl font-semibold hover:bg-gray-300'>x</button>
                
                <div className='flex flex-col mt-4 text-center space-y-10 bg-white shadow-2xl text-2xl font-semibold p-4 w-full absolute top-1/2 transform -translate-y-full'>
                    <Link to='/' className={`${currentPage === '/' ? 'bg-red-500 text-white rounded-full py-1' : ''}`}>Home</Link>
                    <Link to='/diabetes' className={`${currentPage === '/diabetes' ? 'bg-red-500 text-white rounded-full py-1' : ''}`}>Diabetes</Link>
                    <Link to='/heart' className={`${currentPage === '/heart' ? 'bg-red-500 text-white rounded-full py-1' : ''}`}>Heart</Link>
                </div>
            
        </div>

    </div>
  );
};

export default Hamburger;