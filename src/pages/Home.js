import React from 'react'
import { Link } from 'react-router-dom';
import Hamburger from '../components/Hamburger';

const Home = () => {
  return (
    <div>
          <div className="bg-cover bg-right min-h-screen flex flex-col justify-center" style={{ backgroundImage: 'url(/doctor.jpg)' }}>

            <div className='fixed top-0 w-full h-16 flex justify-between p-5'>
              <div className='w-8 h-8 sm_md:w-10 sm_md:h-10 bg-white rounded-md flex justify-center items-center font-semibold text-xl text-red-700'>
                H
              </div>
              <div className=''>
                <Hamburger/>
              </div>
            </div>

            <div className='text-white text-xl sm_md:text-2xl lg:text-4xl xl:text-5xl space-y-3 ml-3 sm_md:ml-8 mt-4'>
              <div>
                Welcome to Health Insight.
              </div>
              <div>
                Unlocking Tomorrow's Health Today
              </div>
              <div>
                Where Predictions Meet Prevention!
              </div>
            </div>
            
            <Link to='/diabetes' className='text-white text-xl sm_md:text-2xl xl:text-3xl ml-8 mt-8 border-2 border-white w-36 xl:w-48 flex justify-center py-1 rounded-full hover:bg-gray-500'>Get Started</Link>
            
          </div>

    </div>
  )
}

export default Home