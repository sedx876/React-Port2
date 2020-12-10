import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
  return (
    <header className="bg-teal-600">
      <div className="container mx-auto flex jusitfy-between">
        <nav className="flex">
          <NavLink to='/' exact
                          activeClassName="text-white"
                          className="inflex-flex 
                          items-center 
                          py-6 
                          px-3 
                          mr-4 
                          text-teal-200 
                          hover:text-teal-900 
                          text-4xl 
                          font-bold 
                          cursive
                          tracking-widest">Sharon</NavLink>
          <NavLink to='/post'
                          activeClassName="text-teal-100 bg-teal-800"
                          className="inflex-flex 
                          items-center 
                          py-3 
                          px-3 
                          my-6
                          rounded 
                          text-teal-200 
                          hover:text-teal-900 ">Blog Posts</NavLink>
          <NavLink to='/project'
                          activeClassName="text-teal-100 bg-teal-800"
                          className="inflex-flex 
                          items-center 
                          py-3 
                          px-3 
                          my-6 
                          rounded
                          text-teal-200 
                          hover:text-teal-900 ">Projects</NavLink>
          <NavLink to='/about'
                          activeClassName="text-teal-100 bg-teal-800"
                          className="inflex-flex 
                          items-center 
                          py-3 
                          px-3 
                          my-6 
                          rounded
                          text-teal-200 
                          hover:text-teal-900 ">About Me</NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url='https://twitter.com/SedX876' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }}/>
          <SocialIcon url='https://www.linkedin.com/in/sharonlwatkinsdev/' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }}/>
          <SocialIcon url='https://github.com/sedx876' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width: 35 }}/>
        </div>
      </div>
    </header>
  )
}

export default NavBar
