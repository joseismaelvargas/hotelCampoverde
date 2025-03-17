import "./nav.css"
import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"

const Nav = () => {
    const [menu,setMenu]=useState(false)
  return (
    <nav className="navegador bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className=" relative flex h-20 sm:h-31 items-center justify-between">
           <img src="http://hotelcamposverdes.com.ar/wp-content/uploads/2016/12/logo.png"  className="imglogo w-[250px]"alt="logo" />
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
         
        <button type="button"onClick={() =>setMenu((prev)=>!prev)}  className= " btn-menu relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
       
          <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
      
          <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
 
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
        <div className="flex shrink-0 items-center">
          
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
          
         <Link  className="link rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" en to={"/"}>HOTEL</Link>
         <Link  className="link rounded-md  px-3 py-2 text-sm font-medium text-white" en to={"/servicios"}>SERVICIOS</Link>
         <Link  className=" link rounded-md  px-3 py-2 text-sm font-medium text-white" en to={"/fotos"}>FOTOS</Link>
         <Link  className=" link rounded-md  px-3 py-2 text-sm font-medium text-white" en to={"/salon"}>SALON</Link>
         <Link  className=" link rounded-md  px-3 py-2 text-sm font-medium text-white" en to={"/admin"}>ADMINISTRACION</Link>
         
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">View notifications</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
        </button>

    
        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="size-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
            </button>
          </div>

    
        
        </div>
      </div>
    </div>
  </div>


  <div className={`${menu ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
    
      < Link end to={"/"} className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">HOTEL</Link>
      <Link  end to={"/servicios"} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">SERVICIOS</Link>
      <Link  end to={"/fotos"} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">FOTOS</Link>
      
      <Link end to={"/salon"}className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">SALON</Link>
      <Link end to={"/admin"} className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">ADMINISTRACION</Link>
    </div>
  </div>
</nav>

  )
}

export default Nav
