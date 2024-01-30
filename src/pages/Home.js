import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
          <div className="bg-cover bg-top min-h-screen " style={{ backgroundImage: 'url(/doctors2.jpg)' }}>
            <Link to='/diabetes'>
              Diabetes
            </Link>
          </div>

    </div>
  )
}

export default Home